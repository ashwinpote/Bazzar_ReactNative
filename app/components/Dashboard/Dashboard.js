'use strict';

import DashboardBase from './DashboardBase';
import DashboardRender from './DashboardRender';

export default class Dashboard extends DashboardBase{
    constructor(props, state){
        super(props);
    }

    render(){
        return DashboardRender.call(this, this.state, this.props);
    }
}

