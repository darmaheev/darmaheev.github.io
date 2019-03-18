import React, { Component } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import uniqBy from "lodash/uniqBy";
import {PAGE_SIZE_SET} from "../../constants/common";
import * as styles from "./styles";

class Pagination extends Component {
  handleChangePage = (page) => {
    const start = page === 1 ? 1 : (page - 1) * this.props.pageSize + 1;
    const {pageSize, total} = this.props;
    this.props.onPageClick({
      start,
      pageSize,
      total
    });
  };

  handleChangePageSize = (pageSize) => {
    this.props.onPageClick({
      start: 1,
      pageSize,
      total: this.props.total
    });
  };

  render() {
    const { start, total, pageSize, withPages, withPageSize } = this.props;

    const currentPage = start === 1 ? 1 : (start - 1) / pageSize + 1;
    const initialPages = Math.ceil(total / pageSize);
    const pages = initialPages === 0 ? 1 : initialPages;
    const hideIntermediatePages = pages > 10;

    let pagesArray;

    if (hideIntermediatePages) {
      const allPages = [...Array(pages).keys()].map((page) => page + 1);

      pagesArray = [
        ...allPages.filter((page) => {
          return page <= 3;
        }),
        ...allPages.filter((page) => {
          return page >= currentPage - 2 && page <= currentPage + 1;
        }),
        ...allPages.slice(allPages.length - 3)
      ];

      let pagesArrayWithPlaceholders = [];

      for (let idx = 0; idx < pagesArray.length; idx++) {
        const prevValue = pagesArray[idx - 1];

        if (prevValue) {
          if (pagesArray[idx] - prevValue > 1) {
            pagesArrayWithPlaceholders.push(undefined);
            pagesArrayWithPlaceholders.push(pagesArray[idx]);
          } else {
            pagesArrayWithPlaceholders.push(pagesArray[idx]);
          }
        } else {
          pagesArrayWithPlaceholders.push(pagesArray[idx]);
        }
      }

      pagesArray = pagesArrayWithPlaceholders.map((page) => ({
        page: page ? page : nanoid(),
        label: page ? page : "..."
      }));

      pagesArray = uniqBy(pagesArray, "page");
    } else {
      pagesArray = [...Array(pages).keys()]
        .map((page) => page + 1)
        .map((page) => ({
          page: page,
          label: page
        }));
    }

    return (
      <styles.Pagination>
        {withPages &&
        pagesArray.map((page) => (
          <styles.PaginationControl
            key={page.page}
            current={page.page === currentPage}
            disabled={page.label === "..." || page.page === currentPage}
            onClick={() => this.handleChangePage(page.page)}
          >
            {page.label}
          </styles.PaginationControl>
        ))}

        {!withPages && (
          <styles.PaginationControl
            disabled={currentPage === 1}
            onClick={() => this.handleChangePage(currentPage - 1)}
          >
            Назад
          </styles.PaginationControl>
        )}

        {!withPages && (
          <styles.PaginationControl
            disabled={total < pageSize}
            onClick={() => this.handleChangePage(currentPage + 1)}
          >
            Вперед
          </styles.PaginationControl>
        )}

        {withPageSize && (
          <styles.PaginationPageSize
            options={PAGE_SIZE_SET.map(pageSize => ({label: pageSize, value: pageSize}))}
            placeholder=""
            value={{label: pageSize, value: pageSize}}
            onChange={(e) => this.handleChangePageSize(e.value)}
          />
        )}
      </styles.Pagination>
    );
  }
}

Pagination.defaultProps = {
  start: 0,
  total: 0,
  pageSize: 10,
  onPageClick: () => {},
  onPageSizeChange: () => {},
  withPages: true,
  withPageSize: false
};

Pagination.propTypes = {
  start: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  withPages: PropTypes.bool,
  withPageSize: PropTypes.bool
};

export default Pagination;
