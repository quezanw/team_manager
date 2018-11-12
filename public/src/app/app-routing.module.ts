import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { AddComponent } from './add/add.component';
import { PlayersStatusComponent } from './players-status/players-status.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {path:'', redirectTo: 'players', pathMatch: 'full'},
    {path: 'players', component: PlayersComponent, children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', component: ListComponent},
        {path: 'addplayer', component: AddComponent}
    ]},
    {path: 'status/game/:num', component: PlayersStatusComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
