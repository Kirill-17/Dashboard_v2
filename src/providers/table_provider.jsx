import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialData, initialColumns, sorts } from "../helpers";

const context = createContext({
  data: [],
  columns: [],
});

export const useTable = () => useContext(context);

export const TableProvider = ({ children }) => {
  const [columns] = useState(initialColumns);
  const [data, setData] = useState(initialData);
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeFilterByPosition, setActiveFilterByPosition] = useState("all");
  const [activeSortIndex, setActiveSortIndex] = useState(-1);
  const [activeSortColumn, setActiveSortColumn] = useState("data");

  const handleChangeActiveSort = (columnKey) => {
    setActiveSortColumn(columnKey);

    if (activeSortColumn === columnKey) {
      setActiveSortIndex(activeSortIndex === 1 ? -1 : activeSortIndex + 1);
      return;
    }

    setActiveSortIndex(-1);
  };

  const activeSort = useMemo(() => sorts[activeSortIndex], [activeSortIndex]);

  const _filterElements = (value, filteredData) => {
    switch (value) {
      case "even":
        return [...filteredData].filter((_, index) => (index + 1) % 2 === 0);
      case "odd":
        return [...filteredData].filter((_, index) => (index + 1) % 2 !== 0);
      default:
        return [...filteredData];
    }
  };
  const handleChangeFilterByPosition = (value) => {
    setActiveFilterByPosition(value);
    const filteredItems = _filterElements(
      value,
      activeSortIndex !== -1 && value !== "all" ? data : initialData
    );

    if (activeSortIndex !== -1) {
      filteredItems.sort(_compare);
    }
    setData(filteredItems);
  };

  const _removeActiveFilter = ({ type }) => {
    const newFilters = [...activeFilters];
    newFilters.splice(
      newFilters.findIndex((filter) => filter.type === type),
      1
    );
    setActiveFilters(newFilters);
  };

  const _editActiveFilter = ({ type, value, editableFilterIndex }) => {
    const newFilters = [...activeFilters];
    newFilters.splice(editableFilterIndex, 1, {
      type,
      value,
    });
    setActiveFilters(newFilters);
  };

  const _getEditableFilterIndex = (type) => {
    return activeFilters.findIndex((filter) => filter.type === type);
  };

  const handleChangeFilter = ({ value, type }) => {
    const editableFilterIndex = _getEditableFilterIndex(type);

    if (!value?.length && editableFilterIndex) {
      _removeActiveFilter({ type });
      return;
    }
    if (editableFilterIndex > -1) {
      _editActiveFilter({ value, type, editableFilterIndex });
      return;
    }

    setActiveFilters([...activeFilters, { type, value }]);
  };

  useEffect(() => {
    const filteredData = [
      ...(activeFilterByPosition !== "all" ? data : initialData),
    ].filter((item) =>
      activeFilters.every(({ type, value }) =>
        item[type].toString().includes(value.toLowerCase())
      )
    );
    if (activeSortIndex !== -1) {
      filteredData.sort(_compare);
    }

    setData(filteredData);
  }, [activeFilters, activeSort]);

  const _compare = (a, b) => {
    if (a[activeSortColumn] < b[activeSortColumn])
      return activeSort === "asc" ? -1 : 1;
    if (a[activeSortColumn] > b[activeSortColumn])
      return activeSort === "asc" ? 1 : -1;
    return 0;
  };

  return (
    <context.Provider
      value={{
        columns,
        data,
        activeFilters,
        activeFilterByPosition,
        activeSort,
        activeSortColumn,
        handleChangeActiveSort,
        handleChangeFilterByPosition,
        handleChangeFilter,
      }}
    >
      {children}
    </context.Provider>
  );
};
