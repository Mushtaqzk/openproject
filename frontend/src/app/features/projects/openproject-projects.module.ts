// -- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2023 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See COPYRIGHT and LICENSE files for more details.
//++

import { NgModule } from '@angular/core';
import { OpenprojectHalModule } from 'core-app/features/hal/openproject-hal.module';
import { UIRouterModule } from '@uirouter/angular';
import { OpenprojectFieldsModule } from 'core-app/shared/components/fields/openproject-fields.module';
import { PROJECTS_ROUTES, uiRouterProjectsConfiguration } from 'core-app/features/projects/projects-routes';
import { DynamicFormsModule } from 'core-app/shared/components/dynamic-forms/dynamic-forms.module';
import { NewProjectComponent } from 'core-app/features/projects/components/new-project/new-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OPSharedModule } from 'core-app/shared/shared.module';
import { CopyProjectComponent } from 'core-app/features/projects/components/copy-project/copy-project.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    // Commons
    OPSharedModule,
    ReactiveFormsModule,

    OpenprojectHalModule,
    OpenprojectFieldsModule,
    UIRouterModule.forChild({
      states: PROJECTS_ROUTES,
      config: uiRouterProjectsConfiguration,
    }),
    DynamicFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    NewProjectComponent,
    CopyProjectComponent,
  ],
})
export class OpenprojectProjectsModule {
}
