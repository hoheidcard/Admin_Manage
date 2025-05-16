import { defineAsyncComponent } from 'vue'


// components
const NavbarCRM = defineAsyncComponent(() => import('../components/NavbarCRM.vue'))
const NavbarAgent = defineAsyncComponent(() => import('../components/NavbarAgent.vue'))
const Footer1 = defineAsyncComponent(() => import('../components/Footer1.vue'))
const Footer2 = defineAsyncComponent(() => import('../components/Footer2.vue'))
const MenuWrapperCRM = defineAsyncComponent(() => import('../components/MenuWrapperCRM.vue'))
const MenuWrapperAgent = defineAsyncComponent(() => import('../components/MenuWrapperAgent.vue'))
const TableSelect = defineAsyncComponent(() => import('../components/Dropdown/TableSelect.vue'))
const SingleSelect = defineAsyncComponent(() => import('../components/Dropdown/SingleSelect.vue'))
const SingleSelectId = defineAsyncComponent(() => import('../components/Dropdown/SingleSelectId.vue'))
const Select = defineAsyncComponent(() => import('../components/Dropdown/Select.vue'))
const FontSelect = defineAsyncComponent(() => import('../components/Dropdown/FontSelect.vue'))
const MultiSelect = defineAsyncComponent(() => import('../components/Dropdown/MultiSelect.vue'))
const Modal = defineAsyncComponent(() => import('../components/Modal.vue'))
const Alert = defineAsyncComponent(() => import('../components/Alert.vue'))
const Pagination = defineAsyncComponent(() => import('../components/Pagination.vue'))
const Loader = defineAsyncComponent(() => import('../components/Loader.vue'))
const Loader2 = defineAsyncComponent(() => import('../components/Loader2.vue'))
const Loader3 = defineAsyncComponent(() => import('../components/Loader3.vue'))
const Filter = defineAsyncComponent(() => import('../components/Filter.vue'))
const TimePicker = defineAsyncComponent(() => import("../components/TimePicker.vue"));
// const  = defineAsyncComponent(() => import('../components/.vue'))

const DashSchoolList = defineAsyncComponent(() => import("../components/Dashboard/SchoolList.vue"));
const DashCollegeList = defineAsyncComponent(() => import("../components/Dashboard/CollegeList.vue"));
const DashPartnerList = defineAsyncComponent(() => import("../components/Dashboard/PartnerList.vue"));
const DashSubPartnerList = defineAsyncComponent(() => import("../components/Dashboard/SubPartnerList.vue"));
const DashOrganizationList = defineAsyncComponent(() => import("../components/Dashboard/OrganizationList.vue"));
const DashStudentList = defineAsyncComponent(() => import("../components/Dashboard/Students.vue"));
const DashStaffList = defineAsyncComponent(() => import("../components/Dashboard/Staff.vue"));

const Notification = defineAsyncComponent(() => import('../components/Notification.vue'));
const NotificationList = defineAsyncComponent(() => import('../components/NotificationList.vue'));
const NotificationMessage = defineAsyncComponent(() => import('../components/NotificationMessage.vue'));
//icons
const UserIcon = defineAsyncComponent(() => import('../components/icons/user-svg.vue'))
const AlertDangerIcon = defineAsyncComponent(() => import('../components/icons/alert-danger-svg.vue'))
const AlertSuccessIcon = defineAsyncComponent(() => import('../components/icons/alert-success-svg.vue'))
const HomeIcon = defineAsyncComponent(() => import('../components/icons/home-svg.vue'))
const EyeIcon = defineAsyncComponent(() => import('../components/icons/eye-svg.vue'))
const DeleteIcon = defineAsyncComponent(() => import('../components/icons/delete-svg.vue'))
const TwitterIcon = defineAsyncComponent(() => import('../components/icons/twitter-svg.vue'))
const InstagramIcon = defineAsyncComponent(() => import('../components/icons/instagram-svg.vue'))
const FacebookIcon = defineAsyncComponent(() => import('../components/icons/facebook-svg.vue'))
const GoogleIcon = defineAsyncComponent(() => import('../components/icons/google-svg.vue'))
const WhatsappIcon = defineAsyncComponent(() => import('../components/icons/whatsapp-svg.vue'))
const TelegramIcon = defineAsyncComponent(() => import('../components/icons/telegram-svg.vue'))
const StarIcon = defineAsyncComponent(() => import('../components/icons/star-svg.vue'))
const RightArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-round-svg.vue'))
const DownArrowRoundIcon = defineAsyncComponent(() => import('../components/icons/down-arrow-round-svg.vue'))
const DownArrowIcon = defineAsyncComponent(() => import('../components/icons/down-arrow-svg.vue'))
const TopArrowIcon = defineAsyncComponent(() => import('../components/icons/top-arrow-svg.vue'))
const CrossIcon = defineAsyncComponent(() => import('../components/icons/cross-svg.vue'))
const LoginLoaderIcon = defineAsyncComponent(() => import('../components/icons/login-loader-svg.vue'))
const ClockIcon = defineAsyncComponent(() => import('../components/icons/clock-svg.vue'))
const InfoIcon = defineAsyncComponent(() => import('../components/icons/info-svg.vue'))
const MenuIcon = defineAsyncComponent(() => import('../components/icons/menu-svg.vue'))
const Menu2Icon = defineAsyncComponent(() => import('../components/icons/menu2-svg.vue'))
const BellIcon = defineAsyncComponent(() => import('../components/icons/bell-svg.vue'))
const QuoteIcon = defineAsyncComponent(() => import('../components/icons/quote-svg.vue'))
const SuccessIcon = defineAsyncComponent(() => import('../components/icons/success-svg.vue'))
const WarningIcon = defineAsyncComponent(() => import('../components/icons/warning-svg.vue'))
const LocationIcon = defineAsyncComponent(() => import('../components/icons/location-svg.vue'))
const ExitIcon = defineAsyncComponent(() => import('../components/icons/exit-svg.vue'))
const EditIcon = defineAsyncComponent(() => import('../components/icons/edit-svg.vue'))
const RightDoubleArrowIcon = defineAsyncComponent(() => import('../components/icons/right-double-arrow-svg.vue'))
const LeftDoubleArrowIcon = defineAsyncComponent(() => import('../components/icons/left-double-arrow-svg.vue'))
const DownloadIcon = defineAsyncComponent(() => import('../components/icons/download-svg.vue'))
const VertDotsIcon = defineAsyncComponent(() => import('../components/icons/vert-dots-svg.vue'))
const RightArrowIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-svg.vue'))
const LeftArrowIcon = defineAsyncComponent(() => import('../components/icons/left-arrow-svg.vue'))
const GroupIcon = defineAsyncComponent(() => import('../components/icons/group-svg.vue'))
const PhoneIcon = defineAsyncComponent(() => import('../components/icons/phone-svg.vue'))
const CalendarIcon = defineAsyncComponent(() => import('../components/icons/calendar-svg.vue'))
const MusicIcon = defineAsyncComponent(() => import('../components/icons/music-svg.vue'))
const SearchIcon = defineAsyncComponent(() => import('../components/icons/search-svg.vue'))
const SettingIcon = defineAsyncComponent(() => import('../components/icons/setting-svg.vue'))
const MailIcon = defineAsyncComponent(() => import('../components/icons/mail-svg.vue'))
const RightArrowSingleIcon = defineAsyncComponent(() => import('../components/icons/right-arrow-single-svg.vue'))
const DownArrowSingleIcon = defineAsyncComponent(() => import('../components/icons/down-arrow-single-svg.vue'))
const MessageIcon = defineAsyncComponent(() => import('../components/icons/message-svg.vue'))
const FilterIcon = defineAsyncComponent(() => import('../components/icons/filter-svg.vue'))
const ReloadIcon = defineAsyncComponent(() => import('../components/icons/reload-svg.vue'))
const HelpIcon = defineAsyncComponent(() => import('../components/icons/help-svg.vue'))
const PlusIcon = defineAsyncComponent(() => import('../components/icons/plus-svg.vue'))
const BlockIcon = defineAsyncComponent(() => import('../components/icons/block-svg.vue'))
const StatusIcon = defineAsyncComponent(() => import('../components/icons/status-svg.vue'))
const CardIcon = defineAsyncComponent(() => import('../components/icons/card-svg.vue'))
const AdminIcon = defineAsyncComponent(() => import('../components/icons/admin-svg.vue'))
const PartnerIcon = defineAsyncComponent(() => import('../components/icons/partner-svg.vue'))
const TeacherIcon = defineAsyncComponent(() => import('../components/icons/teacher-svg.vue'))
const StudentIcon = defineAsyncComponent(() => import('../components/icons/student-svg.vue'))
const CapIcon = defineAsyncComponent(() => import('../components/icons/cap-svg.vue'))
const PermissionIcon = defineAsyncComponent(() => import('../components/icons/permission-svg.vue'))
const OrganizationIcon = defineAsyncComponent(() => import('../components/icons/organization-svg.vue'))
const UserListIcon = defineAsyncComponent(() => import('../components/icons/user-list-svg.vue'))
const StudentListIcon = defineAsyncComponent(() => import('../components/icons/student-list-svg.vue'))
const EditImageIcon = defineAsyncComponent(() => import('../components/icons/edit-image-svg.vue'))
const LibraryListIcon = defineAsyncComponent(() => import('../components/icons/library-list-svg.vue'))
const ProfileIcon = defineAsyncComponent(() => import('../components/icons/profile-svg.vue'))
const ListIcon = defineAsyncComponent(() => import('../components/icons/list-svg.vue'))
const SchoolIcon = defineAsyncComponent(() => import('../components/icons/school-svg.vue'))
const CollegeIcon = defineAsyncComponent(() => import('../components/icons/college-svg.vue'))
const AsignIcon = defineAsyncComponent(() => import('../components/icons/asign-svg.vue'))
const OrganizationsIcon = defineAsyncComponent(() => import('../components/icons/organizations-svg.vue'))
// const Icon = defineAsyncComponent(() => import('../components/icons/-svg.vue'))


// plugin multiselect with search
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const GlobalComponents = {
  install(app) {
    app.component('QuillEditor', QuillEditor)

    app.component('NavbarCRM', NavbarCRM)
    app.component('NavbarAgent', NavbarAgent)
    app.component('Footer1', Footer1)
    app.component('Footer2', Footer2)
    app.component('MenuWrapperCRM', MenuWrapperCRM)
    app.component('MenuWrapperAgent', MenuWrapperAgent)
    app.component("TableSelect", TableSelect);
    app.component("SingleSelect", SingleSelect);
    app.component("SingleSelectId", SingleSelectId);
    app.component("Select", Select);
    app.component("FontSelect", FontSelect);
    app.component("MultiSelect", MultiSelect);
    app.component('Modal', Modal)
    app.component('Alert', Alert)
    app.component("Pagination", Pagination);
    app.component("Loader", Loader);
    app.component("Loader2", Loader2);
    app.component("Loader3", Loader3);
    app.component('Filter', Filter)
    app.component('time-picker', TimePicker)
    // app.component('', )
    app.component('Notification', Notification)
    app.component('Notification-list', NotificationList)
    app.component('Notification-message', NotificationMessage)

    app.component('DashOrganizationList', DashOrganizationList)
    app.component('DashSchoolList', DashSchoolList)
    app.component('DashPartnerList', DashPartnerList)
    app.component('DashSubPartnerList', DashSubPartnerList)
    app.component("DashCollegeList", DashCollegeList);
    app.component("DashStudentList", DashStudentList);
    app.component("DashStaffList", DashStaffList);

    // icons
    app.component('icon-user', UserIcon)
    app.component('icon-alert-danger', AlertDangerIcon)
    app.component('icon-alert-success', AlertSuccessIcon)
    app.component('icon-home', HomeIcon)
    app.component('icon-eye', EyeIcon)
    app.component('icon-delete', DeleteIcon)
    app.component('icon-twitter', TwitterIcon)
    app.component('icon-instagram', InstagramIcon)
    app.component('icon-facebook', FacebookIcon)
    app.component('icon-google', GoogleIcon)
    app.component('icon-whatsapp', WhatsappIcon)
    app.component('icon-telegram', TelegramIcon)
    app.component('icon-star', StarIcon)
    app.component('icon-right-arrow-round', RightArrowRoundIcon)
    app.component('icon-down-arrow-round', DownArrowRoundIcon)
    app.component('icon-down-arrow', DownArrowIcon)
    app.component('icon-top-arrow', TopArrowIcon)
    app.component('icon-cross', CrossIcon)
    app.component('icon-login-loader', LoginLoaderIcon)
    app.component('icon-clock', ClockIcon)
    app.component('icon-info', InfoIcon)
    app.component('icon-menu', MenuIcon)
    app.component('icon-menu2', Menu2Icon)
    app.component('icon-bell', BellIcon)
    app.component('icon-quote', QuoteIcon)
    app.component('icon-success', SuccessIcon)
    app.component('icon-warning', WarningIcon)
    app.component('icon-location', LocationIcon)
    app.component('icon-exit', ExitIcon)
    app.component('icon-edit', EditIcon)
    app.component('icon-right-double-arrow', RightDoubleArrowIcon)
    app.component('icon-left-double-arrow', LeftDoubleArrowIcon)
    app.component('icon-download', DownloadIcon)
    app.component('icon-vert-dots', VertDotsIcon)
    app.component('icon-right-arrow', RightArrowIcon)
    app.component('icon-left-arrow', LeftArrowIcon)
    app.component('icon-group', GroupIcon)
    app.component('icon-phone', PhoneIcon)
    app.component('icon-calendar', CalendarIcon)
    app.component('icon-music', MusicIcon)
    app.component('icon-search', SearchIcon)
    app.component('icon-setting', SettingIcon)
    app.component('icon-mail', MailIcon)
    app.component('icon-right-single-arrow', RightArrowSingleIcon)
    app.component('icon-down-single-arrow', DownArrowSingleIcon)
    app.component('icon-message', MessageIcon)
    app.component('icon-filter', FilterIcon)
    app.component('icon-reload', ReloadIcon)
    app.component('icon-help', HelpIcon)
    app.component('icon-plus', PlusIcon)
    app.component('icon-block', BlockIcon)
    app.component('icon-status', StatusIcon)
    app.component('icon-card', CardIcon)
    app.component('icon-teacher', TeacherIcon)
    app.component('icon-student', StudentIcon)
    app.component('icon-cap', CapIcon)
    app.component('icon-permission', PermissionIcon)
    app.component('icon-organization', OrganizationIcon)
    app.component('icon-admin', AdminIcon)
    app.component('icon-partner', PartnerIcon)
    app.component('icon-user-list', UserListIcon)
    app.component('icon-student-list', StudentListIcon)
    app.component('icon-image-edit', EditImageIcon)
    app.component('icon-library-list', LibraryListIcon)
    app.component('icon-profile', ProfileIcon)
    app.component('icon-list', ListIcon)
    app.component('icon-school', SchoolIcon)
    app.component('icon-college', CollegeIcon)
    app.component('icon-asign', AsignIcon)
    app.component('icon-organizations', OrganizationsIcon)
    // app.component('icon-', Icon)
  }
}

export default GlobalComponents
