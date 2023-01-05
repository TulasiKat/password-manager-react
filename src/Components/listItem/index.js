import {Component} from 'react'
import './index.css'

class ListItem extends Component {
  deleteNow = () => {
    const {details, deleteClicked} = this.props
    const {id} = details
    deleteClicked(id)
  }

  render() {
    const {details, show} = this.props
    const {website, userName, password} = details
    return (
      <li>
        <p className="round">{website[0].toUpperCase()}</p>
        <div className="second-part">
          <p>{website}</p>
          <p className="user-name">{userName}</p>
          {show ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="password-image"
            />
          )}
        </div>
        <button
          type="button"
          className="delete-button"
          testid="delete"
          onClick={this.deleteNow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}

export default ListItem
