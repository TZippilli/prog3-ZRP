import { Component } from 'react'

export default class SearchResults extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        SearchResults {this.props.location.state.query}
      </div>
    )
  }
}


