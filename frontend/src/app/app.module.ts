import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './pages/adminlogin/adminlogin.component';
import { DashboardComponent } from './pages/admindashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { DriverComponent } from './pages/driver/driver.component';
import { BusComponent } from './pages/bus/bus.component';
import { RouteComponent } from './pages/route/route.component';
import { StopsComponent } from './pages/stops/stops.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { AdminProfileComponent } from './pages/adminprofile/adminprofile.component';
import { SettingsComponent } from './pages/adminsettings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { AddDriverComponent } from './pages/add-driver/add-driver.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { AddBusComponent } from './pages/add-bus/add-bus.component';
import { EditBusComponent } from './pages/edit-bus/edit-bus.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { EditRouteComponent } from './pages/edit-route/edit-route.component';
import { AddAttendanceComponent } from './pages/add-attendance/add-attendance.component';
import { EditAttendanceComponent } from './pages/edit-attendance/edit-attendance.component';
import { StudentBusAssignmentComponent } from './pages/student-bus-assignment/student-bus-assignment.component';
import { AddStudentBusAssignmentComponent } from './pages/add-student-bus-assignment/add-student-bus-assignment.component';
import { EditStudentBusAssignmentComponent } from './pages/edit-student-bus-assignment/edit-student-bus-assignment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AddStopComponent } from './pages/add-stop/add-stop.component';
import { EditStopComponent } from './pages/edit-stop/edit-stop.component';
import { AddComplaintComponent } from './pages/add-complaint/add-complaint.component';
import { EditComplaintComponent } from './pages/edit-complaint/edit-complaint.component';
import { AddNotificationComponent } from './pages/add-notification/add-notification.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentLayoutComponent } from './student/student-layout/student-layout.component';
import { StudentNavbarComponent } from './student/student-navbar/student-navbar.component';
import { StudentSidebarComponent } from './student/student-sidebar/student-sidebar.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { StudentBusComponent } from './pages/student-bus/student-bus.component';
import { StudentRouteComponent } from './pages/student-route/student-route.component';
import { StudentAttendanceComponent } from './pages/student-attendance/student-attendance.component';
import { StudentNotificationComponent } from './pages/student-notification/student-notification.component';
import { StudentComplaintComponent } from './pages/student-complaint/student-complaint.component';
import { StudentChangePasswordComponent } from './pages/student-change-password/student-change-password.component';
import { BusOccupancyComponent } from './pages/admin-bus-occupancy/bus-occupancy.component';
import { LiveBusTrackingComponent } from './pages/student-live-bus-tracking/live-bus-tracking.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { ForgotPasswordComponent } from './pages/student-forgot-password/forgot-password.component';
import { AdminChangePasswordComponent } from './pages/admin-change-password/admin-change-password.component';
import { AdminForgotPasswordComponent } from './pages/admin-forgot-password/admin-forgot-password.component';
import { StatCardComponent } from './shared/components/stat-card/stat-card.component';
import { CollegeLogoComponent } from './pages/college-logo/college-logo.component';
import { ThemeComponent } from './pages/admintheme/theme.component';
import { DatabaseBackupComponent } from './pages/database-backup/database-backup.component';
import { StudentSettingsComponent } from './pages/student-settings/student-settings.component';
import { StudentThemeComponent } from './pages/student-theme/student-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AdminLoginComponent,
    DashboardComponent,
    StudentComponent,
    DriverComponent,
    BusComponent,
    RouteComponent,
    StopsComponent,
    AttendanceComponent,
    ComplaintComponent,
    NotificationComponent,
    AdminProfileComponent,
    SettingsComponent,
    AddStudentComponent,
    EditStudentComponent,
    AddDriverComponent,
    EditDriverComponent,
    AddBusComponent,
    EditBusComponent,
    AddRouteComponent,
    EditRouteComponent,
    AddAttendanceComponent,
    EditAttendanceComponent,
    StudentBusAssignmentComponent,
    AddStudentBusAssignmentComponent,
    EditStudentBusAssignmentComponent,
    AddStopComponent,
    EditStopComponent,
    AddComplaintComponent,
    EditComplaintComponent,
    AddNotificationComponent,
    RegisterComponent,
    StudentDashboardComponent,
    StudentLayoutComponent,
    StudentNavbarComponent,
    StudentSidebarComponent,
    StudentProfileComponent,
    StudentBusComponent,
    StudentRouteComponent,
    StudentAttendanceComponent,
    StudentNotificationComponent,
    StudentComplaintComponent,
    StudentChangePasswordComponent,
    BusOccupancyComponent,
    LiveBusTrackingComponent,
    StudentLoginComponent,
    ForgotPasswordComponent,
    AdminChangePasswordComponent,
    AdminForgotPasswordComponent,
    StatCardComponent,
    CollegeLogoComponent,
    ThemeComponent,
    DatabaseBackupComponent,
    StudentSettingsComponent,
    StudentThemeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

    ToastrModule.forRoot({
      timeOut: 1200,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }