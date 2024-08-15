// Write your code here
import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl} = appsDetails

  return (
    <li className="app-item app-item-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
