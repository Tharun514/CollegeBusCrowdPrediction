import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AdminLoginComponent } from './pages/adminlogin/adminlogin.component';
import { DashboardComponent } from './pages/admindashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { DriverComponent } from './pages/driver/driver.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { EditBusComponent } from './pages/edit-bus/edit-bus.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';
import { BusComponent } from './pages/bus/bus.component';
import { RouteComponent } from './pages/route/route.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { EditRouteComponent } from './pages/edit-route/edit-route.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { EditAttendanceComponent } from './pages/edit-attendance/edit-attendance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { StudentBusAssignmentComponent } from './pages/student-bus-assignment/student-bus-assignment.component';
import { AddStudentBusAssignmentComponent } from './pages/add-student-bus-assignment/add-student-bus-assignment.component';
import { EditStudentBusAssignmentComponent } from './pages/edit-student-bus-assignment/edit-student-bus-assignment.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StopsComponent } from './pages/stops/stops.component';
import { AddStopComponent } from './pages/add-stop/add-stop.component';
import { EditStopComponent } from './pages/edit-stop/edit-stop.component';
import { AddComplaintComponent } from './pages/add-complaint/add-complaint.component';
import { EditComplaintComponent } from './pages/edit-complaint/edit-complaint.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { AddNotificationComponent } from './pages/add-notification/add-notification.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentLayoutComponent } from './student/student-layout/student-layout.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { StudentBusComponent } from './pages/student-bus/student-bus.component';
import { StudentRouteComponent } from './pages/student-route/student-route.component';
import { StudentAttendanceComponent } from './pages/student-attendance/student-attendance.component';
import { StudentNotificationComponent } from './pages/student-notification/student-notification.component';
import { StudentComplaintComponent } from './pages/student-complaint/student-complaint.component';
import { StudentChangePasswordComponent } from './pages/student-change-password/student-change-password.component';
import { StudentAuthGuard } from './guards/student-auth.guard';
import { BusOccupancyComponent } from './pages/admin-bus-occupancy/bus-occupancy.component';
import { LiveBusTrackingComponent } from './pages/student-live-bus-tracking/live-bus-tracking.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { ForgotPasswordComponent } from './pages/student-forgot-password/forgot-password.component';
import { AdminProfileComponent } from './pages/adminprofile/adminprofile.component';
import { AdminChangePasswordComponent } from './pages/admin-change-password/admin-change-password.component';
import { AdminForgotPasswordComponent } from './pages/admin-forgot-password/admin-forgot-password.component';
import { SettingsComponent } from './pages/adminsettings/settings.component';
import { CollegeLogoComponent } from './pages/college-logo/college-logo.component';
import { ThemeComponent } from './pages/admintheme/theme.component';
import { DatabaseBackupComponent } from './pages/database-backup/database-backup.component';
import { StudentSettingsComponent } from './pages/student-settings/student-settings.component';
import { StudentThemeComponent } from './pages/student-theme/student-theme.component';


const routes: Routes = [

  {
    path: '',
    component: AdminLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'student-login',
    component: StudentLoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'admin-change-password',
    component: AdminChangePasswordComponent
  },
  {
    path: 'admin-forgot-password',
    component: AdminForgotPasswordComponent
  },

  // Student Layout
  {
    path: '',
    component: StudentLayoutComponent,
    canActivate: [StudentAuthGuard],
    children: [

      {
        path: 'student-dashboard',
        component: StudentDashboardComponent
      },
      {
        path: 'student-profile',
        component: StudentProfileComponent
      },
      {
        path: 'student-bus',
        component: StudentBusComponent
      },
      {
        path: 'student-route',
        component: StudentRouteComponent
      },
      {
        path: 'student-attendance',
        component: StudentAttendanceComponent
      },
      {
        path: 'student-notifications',
        component: StudentNotificationComponent
      },
      {
        path: 'student-complaint',
        component: StudentComplaintComponent
      },
      {
        path: 'student-change-password',
        component: StudentChangePasswordComponent
      },
      {
        path: 'student-settings',
        component: StudentSettingsComponent
      },
      {
        path: 'student-theme',
        component: StudentThemeComponent
      },
      {
        path: 'student-live-bus-tracking',
        component: LiveBusTrackingComponent
      },
    ]
  },

  // Admin Layout
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'students',
        component: StudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'drivers',
        component: DriverComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-driver',
        component: AddDriverComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-driver/:id',
        component: EditDriverComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'buses',
        component: BusComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-bus',
        component: AddBusComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-bus/:id',
        component: EditBusComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'routes',
        component: RouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-route',
        component: AddRouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-route/:id',
        component: EditRouteComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'attendance',
        component: AttendanceComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'add-attendance',
        component: AddAttendanceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-attendance/:id',
        component: EditAttendanceComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'student-bus-assignment',
        component: StudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-student-bus-assignment',
        component: AddStudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-student-bus-assignment/:id',
        component: EditStudentBusAssignmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'stops',
        component: StopsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-stop',
        component: AddStopComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-stop/:id',
        component: EditStopComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'complaints',
        component: ComplaintComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-complaint',
        component: AddComplaintComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-complaint/:id',
        component: EditComplaintComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'notifications',
        component: NotificationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-notification',
        component: AddNotificationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'bus-occupancy',
        component: BusOccupancyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'live-bus-tracking',
        component: LiveBusTrackingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'college-logo',
        component: CollegeLogoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'theme',
        component: ThemeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'database-backup',
        component: DatabaseBackupComponent,
        canActivate: [AuthGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }