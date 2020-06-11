import React, { Component } from "react";
import Pagination from '@material-ui/lab/Pagination';
import "./paginition.css"
export default class Paginition extends Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  //Komponentin Real Dom’a aktarılmadan önceki andır.
  //Yani render işleminden hemen önceki tetiklenen Event’tir.

  componentWillMount() {
    //gelen değerin dolu mu boşmuolduğunu kontrolediyoruz.
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // öğeler değişirse sayfası sıfırla
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;
    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // belirtilen sayfa için nesne alır.
    pager = this.getPager(items.length, page);

    //items dizisinden öğelerin yeni sayfasını al
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // state i güncellenir
    this.setState({ pager: pager });

    // üst bileşende bulunan sayfa değiştirme fonksiyonu çalıştırılı.
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    //varsayılan sayfa olarak i verdik.
    currentPage = currentPage || 1;

    // her sayfada kaç tane post olacağını belirledik.
    pageSize = pageSize || 6;

    // gelen dataya göre kaçtane sayfa oluşturalacağını
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // kaç tane sayfa sayısı oluşturulacağıbelirtilir.
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // Oluşturulan stateler geri döndürülür.
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
  render() {

    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      // sadece 1 sayfa var sa paginiton gözükmesini engellemek için koydum.
      return null;
    }

    return (
      <ul className="pagination" >
        
        <li  className={pager.currentPage === 1 ? "disabled" : ""}>
          <a  onClick={() => this.setPage(1)}> {"<<"} </a>
        </li>
        
        <li className={pager.currentPage === 1 ? "disabled" : ""}>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            {"<"}
          </a>
        </li>

        {/********SAYFA SAYISINI ÇEKER******/}
        {pager.pages.map((page, index) => (
          <li key={page} className={pager.currentPage === page ? "active" : ""}>
            <a style={{ cursor: "pointer" }} onClick={() => this.setPage(page)}>
              {page}
            </a>
          </li>
        ))}
        {/********SAYFA SAYISINI ÇEKER******/}

        <li
          className={pager.currentPage === pager.totalPages ? "disabled" : ""}
        >
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            >
          </a>
        </li>
        <li
          className={pager.currentPage === pager.totalPages ? "disabled" : ""}
        >
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.setPage(pager.totalPages)}
          >
            >>
          </a>
          
        </li>
      </ul>
    );
    
  }
}
