import s from "../styles/table.module.scss";
import { useTable } from "../providers/table_provider";
import classNames from "classnames";
import { Sort } from "./icons/sort";

export const Table = () => {
  const {
    columns,
    data,
    handleChangeFilter,
    activeSort,
    activeSortColumn,
    handleChangeActiveSort,
  } = useTable();

  const onChangeHandler = ({ target: { name, value } }) => {
    handleChangeFilter({ value: value.toLowerCase(), type: name });
  };

  return (
    <div className={s.table}>
      <div className={classNames(s.header, s.row)}>
        {columns.map((column) => (
          <TableColumnHeader
            data={column}
            activeSort={activeSort}
            activeSortColumn={activeSortColumn}
            handleChangeActiveSort={() => handleChangeActiveSort(column.key)}
          />
        ))}
      </div>
      <div className={s.table_content}>
        {data.map((item) => (
          <div key={item.key} className={s.row}>
            {columns.map((column) => (
              <div key={column.key} className={s.column}>
                {item[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={classNames(s.filters, s.row)}>
        {columns
          .filter((c) => !!c.filterable)
          .map((column) => (
            <input
              key={column.key}
              name={column.key}
              placeholder={column?.filterOptions?.placeholder ?? ""}
              className={classNames(s.filters__input, s.column)}
              onChange={onChangeHandler}
            />
          ))}
      </div>
    </div>
  );
};

const TableColumnHeader = ({
  data,
  handleChangeActiveSort,
  activeSort,
  activeSortColumn,
}) => {
  if (data.sortable)
    return (
      <div
        className={classNames(s.column, s["column__header--sortable"])}
        onClick={handleChangeActiveSort}
      >
        <Sort type={activeSortColumn === data.key ? activeSort : null} />
        {data.title}
      </div>
    );

  return (
    <div className={classNames(s.column, s.column__header)}>{data.title}</div>
  );
};
