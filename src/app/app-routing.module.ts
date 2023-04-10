import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataComponent } from './components/data/data.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { StadiumFormComponent } from './components/stadium-form/stadium-form.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  //  http://localhost:4200
  {path: "", component: HomeComponent},
    //  http://localhost:4200/login
  {path: "login", component: LoginComponent},
    
  {path: "signup", component: SignupComponent },
  {path: "addMatch", component: AddMatchComponent },
  {path: "addTeam", component: AddTeamComponent },
  {path: "admin", component: AdminComponent },
  {path: "matches", component: MatchesComponent },
  {path: "addPlayer", component: AddPlayerComponent },
  {path: "data", component: DataComponent },

  //  http://localhost:4200/displayMatch/variable
  {path: "displayMatch/:id", component: DisplayMatchComponent },
  {path: "editMatch/:id", component: EditMatchComponent },

  {path: "displayPlayer/:id", component: DisplayPlayerComponent },
  {path: "editPlayer/:id", component: EditPlayerComponent },

  {path: "displayTeam/:id", component: DisplayTeamComponent },
  {path: "editTeam/:id", component: EditTeamComponent },

  {path: "addStadium", component: StadiumFormComponent },
  {path: "editStadium/:id", component: StadiumFormComponent },

  {path: "search", component: SearchComponent },
  {path: "filter", component: SearchFilterComponent },
  {path: "weather", component: WeatherComponent },




  {path: "**", component: ErrorNotFoundComponent },

 








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
