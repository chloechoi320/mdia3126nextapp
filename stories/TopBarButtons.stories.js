import React from 'react';
import TopBarButton from '../comps/TopBarButton';

export default {
    title: 'TopBarButton',
    component: TopBarButton
};

export const Logo = () => <TopBarButton color="#3D5AF1" />;
export const Menu1 = () => <TopBarButton text="Menu 1" color="#777777" fontSize="14px"/>;
export const Menu2 = () => <TopBarButton text="Menu 2" color="#777777" fontSize="14px"/>;