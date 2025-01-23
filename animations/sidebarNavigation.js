// Buttons 
let openSidebar_BTN = document.querySelector('.openSidebarBTN')
let closeSidebar_BTN = document.querySelector('.closeSidebarBTN')

// Sections
let sidebarNavigation_Section = document.querySelector('.sidebarNavigation')

// Button Event Listeners
openSidebar_BTN.addEventListener('click', function () {
    sidebarNavigation_Section.style.animation = 'sidebarOpening 200ms 1 forwards'
})

closeSidebar_BTN.addEventListener('click', function () {
    sidebarNavigation_Section.style.animation = 'sidebarClosing 200ms 1 forwards'
})
