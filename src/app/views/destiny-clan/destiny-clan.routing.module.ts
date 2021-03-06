import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinyClanComponent } from './destiny-clan.component';
import { DestinyRosterComponent } from './components/destiny-roster/destiny-roster.component';
import { DestinyLeaderboardsComponent } from './components/destiny-leaderboards/destiny-leaderboards.component';
import { DestinyInfoComponent } from './components/destiny-info/destiny-info.component';

const routes: Routes = [{
    path: ':clanId',
    component: DestinyClanComponent,
    children: [
        {
            path: '',       
            component: DestinyRosterComponent,
            children: [
                {
                    path: 'player/:destinyId/:bungieId',
                    component: DestinyRosterComponent
                }
            ]
        },
        {
            path: 'roster',
            component: DestinyRosterComponent,
            children: [
                {
                    path: 'player/:destinyId/:bungieId',
                    component: DestinyRosterComponent
                }
            ]
        },
        {
            path: 'leaderboards',
            component: DestinyLeaderboardsComponent
        },
        {
            path: 'info',
            component: DestinyInfoComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DestinyClanRoutingModule {

}
