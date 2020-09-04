const loadHTML = ({ destination, startDate, endDate, duration, remainingTime }) => {
    return `
        <li class="nav-item">
            <div class="nav__description">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" class="bi bi-cursor"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                </svg>
                <span class="nav__description-item-title">Destination:</span> ${destination}
            </div>
            <div class="nav__description">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" class="bi bi-calendar3"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                    <path fill-rule="evenodd"
                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span class="nav__description-item-title">From:</span> ${startDate}
            </div>
            <div class="nav__description">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" class="bi bi-calendar3"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                    <path fill-rule="evenodd"
                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span class="nav__description-item-title">Until:</span> ${endDate}
            </div>
            <div class="nav__description">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" class="bi bi-clock"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                    <path fill-rule="evenodd"
                        d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <span class="nav__description-item-title">Trip Duration:</span> ${duration} days
            </div>
            <div class="nav__description">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" class="bi bi-clock"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                    <path fill-rule="evenodd"
                        d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <span class="nav__description-item-title">Remaining time until your travel:</span> ${remainingTime}
            </div>
        </li>
    `;
}

const loadSchedule = (schedule) => {
    const sideMenuItemEl = document.getElementById('sidebarMenuItem');
    sideMenuItemEl.insertAdjacentHTML('beforeend', loadHTML(schedule));
}

export { loadSchedule };