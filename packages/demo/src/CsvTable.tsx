import React, { useCallback } from "react";
import { Table, TableColumn } from "react-compact-table";
import CsvLink from "react-csv-export";
import styled from "styled-components";

const FAKE_DATA = [
  { id: "id-0", name: "Youngjae", age: 29, country: "KOR" },
  { id: "id-1", name: "Kiook", age: 20, country: "JAP" },
  { id: "id-2", name: "Brian", age: 30, country: "USA" },
  { id: "id-3", name: "Kisoo", age: 41, country: "DPR" },
  { id: "id-4", name: "Youngsik", age: 51, country: "GER" }
];

const Text = styled.span`
  font-size: 13px;
  color: #333333;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 69px;
`;

const Button = styled.div`
  padding: 8px 13px;
  border-radius: 1px;
  background: #5d95ff;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

const CsvTable: React.FC = () => {
  const renderFooterChildren = useCallback(() => {
    return (
      <FooterContainer>
        <CsvLink data={FAKE_DATA} fileName="demo_export" withTimeStamp>
          <Button>Export CSV</Button>
        </CsvLink>
      </FooterContainer>
    );
  }, []);

  return (
    <Table
      data={FAKE_DATA}
      headerHeight="30px"
      headerFontSize="13px"
      headerFontColor="#333"
      minWidth="600px"
      rowHeight="25px"
      renderFooterChildren={renderFooterChildren}
    >
      <TableColumn
        dataKey="name"
        label="Name"
        help="this is pure text"
        align="left"
      >
        {({ value }) => <Text>{value}</Text>}
      </TableColumn>
      <TableColumn dataKey="age" label="Age" width="150px" align="center">
        {({ value }) => <Text>{value}</Text>}
      </TableColumn>
      <TableColumn
        dataKey="country"
        label="Country"
        width="120px"
        align="center"
      >
        {({ value }) => <Text>{value || 0}</Text>}
      </TableColumn>
    </Table>
  );
};

export default CsvTable;
