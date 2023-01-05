import {Component} from 'react'
import {v4} from 'uuid'
import ListItem from './Components/listItem'
import './App.css'

class App extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    itemsList: [],
    show: false,
    searchValue: '',
  }

  websiteEntered = event => {
    this.setState({website: event.target.value})
  }

  userNameEntered = event => {
    this.setState({userName: event.target.value})
  }

  passwordEntered = event => {
    this.setState({password: event.target.value})
  }

  addClicked = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const item = {
      website,
      userName,
      password,
      id: v4(),
    }
    this.setState(prev => ({
      itemsList: [...prev.itemsList, item],
      website: '',
      userName: '',
      password: '',
    }))
  }

  showPasswordClicked = () => {
    this.setState(prev => ({show: !prev.show}))
  }

  deleteClicked = id => {
    const {itemsList} = this.state
    const items = itemsList.filter(each => each.id !== id)
    this.setState({itemsList: items})
  }

  searchClicked = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {
      website,
      userName,
      password,
      show,
      itemsList,
      searchValue,
    } = this.state

    const searchResults = itemsList.filter(each =>
      each.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top">
          <form className="form-part">
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-line">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.websiteEntered}
                value={website}
              />
            </div>
            <div className="input-line">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.userNameEntered}
                value={userName}
              />
            </div>
            <div className="input-line">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.passwordEntered}
                value={password}
              />
            </div>
            <button type="submit" className="button" onClick={this.addClicked}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="bottom">
          <div className="bottom-line">
            <div className="bottom-heading-line">
              <h1 className="form-heading">Your Passwords</h1>
              <p className="pp">{itemsList.length}</p>
            </div>
            <div className="input-line-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.searchClicked}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-line">
            <input
              type="checkbox"
              id="check"
              className="check-box-box"
              onChange={this.showPasswordClicked}
            />
            <label htmlFor="check">Show Passwords</label>
          </div>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map(each => (
                <ListItem
                  details={each}
                  key={each.id}
                  show={show}
                  deleteClicked={this.deleteClicked}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
