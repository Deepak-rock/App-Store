// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabsDetails

  const onClickTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'active' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-link ${activeClassName}`}
        type="button"
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
