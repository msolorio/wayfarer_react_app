import React from 'react';
import { Redirect } from 'react-router-dom';

/*
TODO
- Create form
- add state to form
- Make request for all cities
*/

class PostAddPage extends React.Component {
  state = {
    cities: [],
    postCity: '',
    postTitle: '',
    postBody: '',
    redirectToCity: false
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/cities');
    const cityData = await response.json();

    this.setState({
      cities: cityData,
      postCity: cityData[0]._id
    });
  }

  renderCityOptions() {
    return this.state.cities.map((city) => {
      return (
        <option key={city._id} value={city._id}>
          {city.name}
        </option>
      );
    });
  }

  handleTitleKeypress = (event) => {
    this.setState({ postTitle: event.target.value });
  }

  handleBodyKeypress = (event) => {
    this.setState({ postBody: event.target.value });
  }
  
  handleCitySelect = (event) => {
    this.setState({ postCity: event.target.value });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      city: this.state.postCity,
      title: this.state.postTitle,
      body: this.state.postBody
    };

    await fetch('http://localhost:4000/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers : { 'Content-Type': 'application/json' }
    });

    this.setState({ redirectToCity: true });
  }

  render() {
    if (this.state.redirectToCity) {
      return <Redirect to={`/cities/${this.state.postCity}`} />
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="city">City: </label>
          <select 
            name="city" 
            id="city" 
            value={this.state.postCity}
            onChange={this.handleCitySelect}
          >
            { this.renderCityOptions() }
          </select>
        </div>

        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text" 
            id="title" 
            name="title" 
            value={this.state.postTitle} 
            onChange={this.handleTitleKeypress}
          />
        </div>

        <div>
          <label htmlFor="body">Body: </label>
          <textarea 
            id="body" 
            name="body" 
            value={this.state.postBody}
            onChange={this.handleBodyKeypress}
          />
        </div>

        <button type="submit">Add Post</button>
      </form>
    )
  }
}

export default PostAddPage;
