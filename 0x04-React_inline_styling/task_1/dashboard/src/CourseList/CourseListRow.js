import React from "react";
import PropTypes from "prop-types";

const rowBackGround = {
  backgroundColor: "#f5f5f5ab",
};
const headerRow = {
  backgroundColor: "#deb5b545",
};
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowBackGround}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerRow} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerRow}>{textFirstCell}</th>
            <th style={headerRow}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
