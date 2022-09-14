export default function NavItem({Icon, title}) {
  return (
    <>
      <div className="nav-item-border"></div>
      <Icon className='nav-item-icon' />
      <p className="nav-item-title">{title}</p>
    </>
  )
}