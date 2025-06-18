import { Container } from 'react-bootstrap'

import '../style/FilterBar.css'

export function Header() {
    return (
        <Container>
            <h1 className='px-5' style={{ color: "#2B2D42" }}>My Tasks</h1>
        </Container>
    )
}

export function Filter({ onSelectCategory, onSelectView, currentView }) {
    return (
        <Container>
            <Container className='py-3 px-5'>
                <button className='filter-btn me-3' onClick={() => onSelectView('All')}>All</button>
                <button className='filter-btn me-3' onClick={() => onSelectView('Upcoming')}>Upcoming</button>
                <button className='filter-btn me-3' onClick={() => onSelectView('Today')}>Today</button>
            </Container>
        </Container>
    )
}