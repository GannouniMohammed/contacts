import React, {Component} from 'react';
import SearchBar from "./SearchBar"
import ContactList from "./ContactList"

class Contacts extends Component {

   state={
      filter:"" 
   }
  handleChange(e){
      console.log(e.target.value)
          this.setState({
               filter:e.target.value
          })
  }

    render() {
        return (
            <div>
                 <SearchBar change={this.handleChange.bind(this)} />
                 <ContactList users={this.props.users} filter={this.state.filter}/>
                 
            </div>
        );
    }
}

export default Contacts;