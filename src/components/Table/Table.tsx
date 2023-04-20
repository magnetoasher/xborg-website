export type TableType = {
  data: TableDataColumn[];
};

export type TableDataColumn = {
  label: string;
  id: string;
  list: TableDataRow[];
};

export type TableDataRow = {
  id: string;
  label: string;
};

export const Table = ({ data }: TableType) => {
  return (
    <div className="table row">
      {data.map((col: TableDataColumn) => (
        <div className="row column expand table-column" key={col.id}>
          <div className="table-heading">{col.label}</div>
          {col.list.map((listItem: TableDataRow) => (
            <div className="table-entry lexend-body-xs1" key={listItem.id}>
              <span>{listItem.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
