import React from 'react'
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';
import { useHooks } from '../Hooks/useHooks';

const TravelHelps = () => {
    const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />  
            {/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="travelHelpHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">Travel & Leisure solution</h1>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
        </>
    )
}

export default TravelHelps
