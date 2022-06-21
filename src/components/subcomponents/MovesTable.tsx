import styled from "styled-components";

export const MovesTable = ({ moveStats }: any) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadData>Name</TableHeadData>
          <TableHeadData>Class</TableHeadData>
          <TableHeadData>Power</TableHeadData>
          <TableHeadData>Accuracy</TableHeadData>
        </TableRow>
      </TableHead>
      <TableBody>
        {moveStats.map((move: any, i: number) => (
          <TableRow key={i}>
            <TableData>{move.name}</TableData>
            <TableData>{move.damage_class}</TableData>
            <TableData>{move.power ? move.power : "N/A"}</TableData>
            <TableData>{move.accuracy ? move.accuracy : "N/A"}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr``;

const TableHeadData = styled.th`
  padding: 5px;
  border: 1px solid #ff9f1c;
`;

const TableBody = styled.tbody``;

const TableData = styled.th`
  padding: 5px;
  border: 1px solid #ff9f1c;
`;
