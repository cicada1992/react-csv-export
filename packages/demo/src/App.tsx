import React from "react";
import styled from "styled-components";

import CsvTable from "./CsvTable";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const App: React.FC = () => (
  <Container>
    <CsvTable />
  </Container>
);

export default App;
