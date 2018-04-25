import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default function (props, state) {
  return(
        <div className="container-fluid">
          <h3 className="dashBoard">Bazzar Dashboard</h3>
          <div className="heading-section">
            <BootstrapTable data={this.state.list} headerStyle={ { background: '#515050', color:'white' } } striped hover search  searchPlaceholder="Search" pagination>
              <TableHeaderColumn isKey dataField='itemname'  dataAlign="center" headerAlign='center' width='250' dataSort>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='category'  dataAlign="center" headerAlign='center' width='250' dataSort>Category</TableHeaderColumn>
              <TableHeaderColumn dataField='price'  dataAlign="center" headerAlign='center' width='250' dataSort>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <button className="btn btn-outline-primary" onClick={this.handleClick}>Add Item</button>
      </div>
  )
}