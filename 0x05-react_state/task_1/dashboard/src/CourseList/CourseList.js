import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";

const styles = StyleSheet.create({
  table: {
    marginTop: "2em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
    marginLeft: "auto",
    marginRight: "auto",
  },
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },
  td: {
    width: "80%",
  },

  tr: {
    "nth-child(2)": {
      textAlign: "left",
    },
  },
});

function CourseList() {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead className={css(styles.th)}>
        <CourseListRow
          textFirstCell="Available courses"
          textSecondCell={null}
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        <CourseListRow
          textFirstCell="ES6"
          textSecondCell="60"
          isHeader={false}
        />
        <CourseListRow
          textFirstCell="Webpack"
          textSecondCell="20"
          isHeader={false}
        />
        <CourseListRow
          textFirstCell="React"
          textSecondCell="40"
          isHeader={false}
        />
      </tbody>
    </table>
  );
}

export default CourseList;
