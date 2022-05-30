import { Sidebar } from "./sidebar";
import { Table } from "./table";
import { DateFilter } from "./date_filter";
import s from "../styles/content.module.scss";
import typeIcon from "../assets/icons/content/printer-icon.svg";
import downloadIcon from "../assets/icons/content/download-icon.svg";

export const Content = ({ tableData }) => {


  return (
    <div className={s.content}>
      <Sidebar />
      <div className="content">
        <div className="table__wrapper">
          <div className={s.content__title}>
            <h1 className={s.content__text}>Dashboard</h1>
            <div className={s.content__icons}>
              <DateFilter />
              <img src={typeIcon} alt="type" />
              <img src={downloadIcon} alt="download" />

            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};
