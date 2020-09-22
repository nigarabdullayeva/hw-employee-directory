import React, { Component } from 'react';
import employee from './employee.json';
import EmpList from './components/EmpList';
import EmpHeader from './components/EmpHeader';
import Information from './components/Information';
import Container from './components/Container';
import TableHeader from './components/TableHeader';
import Table from './components/Table';
import TableInfo from './components/TableInfo';
import Search from './components/Search'

class App extends Component {
    state = {
      employee, 
      search: "",
      alphabeticalOrder: true,
    };
  
    updateSearch(event) {
      this.setState({ search: event.target.value.substr(0, 18) });
    }
  
    handleSort = () => {
      let sortedList;
      if (this.state.alphabeticalOrder) {
        sortedList = this.state.employee.sort((a, b) => a.name.localeCompare(b.name)); 
      } else {
        sortedList = this.state.employee.sort((a, b) => b.name.localeCompare(a.name));
      }
      this.setState ({
        employee: sortedList,
        alphabeticalOrder: !this.state.alphabeticalOrder,
      });
    };
  
    render() {
      let filteredEmployee = this.state.employee.filter((em) => {
        return (
          em.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
      return (
        <Container>
          <Information>
            <EmpList>
              <EmpHeader />
              <>
                <nav className="navbar navbar-light bg-light">
                  <form className="form-inline">
                    <input
                      className=" col form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </nav>
              </>
  
              <Table>
                <TableHeader handleSort={this.handleSort} />
  
                {filteredEmployee.map((employees) => (
                  <TableInfo
                    key = {employees.id}
                    id={employees.id}
                    name={employees.name}
                    position={employees.position}
                    department={employees.department}
                    email={employees.email}
                    phone={employees.phone}
                  />
                ))}
              </Table>
            </EmpList>
          </Information>
        </Container>
      );
    }
  }


export default App;



