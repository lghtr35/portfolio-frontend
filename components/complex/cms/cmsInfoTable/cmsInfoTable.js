import { Drawer } from "@/components/base/Drawer";
import { removeItems } from "@/helpers/functions";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

export const CmsInfoTable = (props) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setContent(props?.data?.content);
  }, [props?.data?.content, props.size, props.page, props?.data?.totalRecords]);
  const totalRecords = props?.data?.totalRecords;
  const size = props.size;
  const page = props.page;
  const schema = removeItems(Object.keys(content?.[0] ?? {}), [
    "$id",
    "succeed",
    "message",
    "reason",
    ...(props?.columnsToRemove ?? []),
  ]);
  return (
    <Drawer isOpen={true} href={props.href} title="Records">
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer style={{ width: "740px", height: "550px" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {schema &&
                  schema.map((val) => {
                    return (
                      <TableCell key={val} sx={{ fontWeight: 650 }}>
                        {val}
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {content &&
                content.map((row) => (
                  <TableRow
                    key={row.$id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {schema.map((col, index) => (
                      <TableCell key={index}>{row[col]?.toString()}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[
                    10,
                    20,
                    50,
                    { label: "All", value: 1000 },
                  ]}
                  count={totalRecords ?? 0}
                  rowsPerPage={size}
                  page={page}
                  onPageChange={props?.handleChangePage}
                  onRowsPerPageChange={props?.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Drawer>
  );
};
