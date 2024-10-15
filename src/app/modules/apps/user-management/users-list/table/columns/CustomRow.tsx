import clsx from "clsx";
import { FC } from "react";
import { Row } from "react-table";
import { User } from "../../core/_models";

type Props = {
  row: Row<User>;
};

const CustomRow: FC<Props> = ({ row }) => {
  // Destructure key from getRowProps and create a new props object without it
  const { key, ...rowProps } = row.getRowProps();

  return (
    <tr {...rowProps} key={key}>
      {row.cells.map((cell) => {
        const cellProps = cell.getCellProps();

        return (
          <td
            {...cellProps}
            key={cellProps.key} // Assign key directly for <td>
            className={clsx({
              "text-end min-w-100px": cell.column.id === "actions",
            })}
          >
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};

export { CustomRow };
