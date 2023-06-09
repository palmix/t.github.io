
var TeoriaPalMixApp = /TeoriaPalMixApp/.test(navigator.userAgent);

function setSiteColor(color){
$('#palmix').attr('data-theme',color);
$('body').attr('data-theme',color);

var colormeta = '';
setSelectertheme();
if(color =='primary'){
colormeta = '#0d6efd';
}else if(color =='secondary'){
colormeta = '#6c757d';
}else if(color =='success'){
colormeta = '#198754';
}else if(color =='warning'){
colormeta = '#ffc107';
}else if(color =='danger'){
colormeta = '#dc3545';
}else if(color =='info'){
colormeta = '#0dcaf0';
}else if(color =='light'){
colormeta = '#f8f9fa';
}else if(color =='dark'){
colormeta = '#212529';
}else if(color =='purple'){
colormeta = '#6f42c1';
}else{
colormeta = '#6f42c1';
}




if(TeoriaPalMixApp){
ScriptAppWeb.setColorThame(color);
}else{
$('meta[name=theme-color]').attr('content',colormeta);
}

setCookie('theme', color, 365);
}









//set nav

function sethomeHTMLs(){
document.title = "تؤوريا";
var sethomeHTML = [''];
sethomeHTML.push('<div class="container-lg px-0">');
sethomeHTML.push('<div class="container-lg px-0">');
sethomeHTML.push('<nav class="navbar navbar-expand-sm navbar-default bg-default py-2">');
sethomeHTML.push('<a href="?page=HomePage" onclick="sethtmlcontainer(\'HomePage\');return false" class="navbar-brand">');
sethomeHTML.push('<img src="file/img/site/logosvg.svg?v=3534" class="avatar" alt="Avatar">');
sethomeHTML.push('<b>تؤوريا</b> نت</a> ');
sethomeHTML.push('<button type="button" class="navbar-toggler shadow-none p-0 d-none" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="القائمة">');
sethomeHTML.push('<button type="button" class="navbar-toggler shadow-none p-0 splash-default ripple" id="btnOffcanvas2" aria-label="القائمة">');



sethomeHTML.push('<i class="fa-solid fa-bars px-3 py-2 fs-2"></i>');
sethomeHTML.push('</button>');
sethomeHTML.push('<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">');
sethomeHTML.push('<form class="navbar-form form-inline my-auto">');
sethomeHTML.push('<div class="input-group search-box">');
sethomeHTML.push('<input type="text" id="search" class="form-control" placeholder="بحث...">');
sethomeHTML.push('<span class="input-group-addon"><i class="fa-solid fa-magnifying-glass"></i></span>');
sethomeHTML.push('</div></form>');
sethomeHTML.push('<div class="navbar-nav mr-auto">');
sethomeHTML.push('<a href="?page=HomePage" onclick="sethtmlcontainer(\'HomePage\');return false" class="nav-item nav-link"><i class="fa fa-home"></i><span>الرئيسية</span></a>');
sethomeHTML.push('<div class="nav-item dropdown">');
sethomeHTML.push('<a href="javascript:;" id="Dropdownquestions" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-item nav-link user-action"><i class="fa-solid fa-messages-question"></i><span class="dropdown-toggle">الأسئلة</span></a>');
sethomeHTML.push('<div class="dropdown-menu" id="Dropdownquestions">');
sethomeHTML.push('<a href="?page=private" onclick="sethtmlcontainer(\'private\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-car-side"></i> خصوصي</a>');
sethomeHTML.push('<a href="?page=truck" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'truck\');return false"><i class="fa-solid fa-truck"></i> شحن خفيف</a>');
sethomeHTML.push('<a href="?page=haulage" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'haulage\');return false"><i class="fa-solid fa-truck-container-empty"></i> شحن ثقيل</a>');
sethomeHTML.push('<a href="?page=taxi" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'taxi\');return false"><i class="fa-solid fa-taxi-bus"></i> عمومي</a>');
sethomeHTML.push('<a href="?page=tractor" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'tractor\');return false"><i class="fa-solid fa-tractor"></i> تراكتور</a>');
sethomeHTML.push('<a href="?page=motorcycle" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'motorcycle\');return false"><i class="fa-solid fa-motorcycle"></i> دراجة نارية</a>');
sethomeHTML.push('<a href="?page=AllExamsPage" onclick="sethtmlcontainer(\'AllExamsPage\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-messages-question"></i> مشاهدة الكل</a>');











sethomeHTML.push('<div class="divider dropdown-divider my-0"></div>');
sethomeHTML.push('<a href="?page=tableUserPage" onclick="sethtmlcontainer(\'tableUserPage\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-user"></i> إختباراتي</a>');

sethomeHTML.push('</div></div>');





sethomeHTML.push('<div class="nav-item dropdown">');
sethomeHTML.push('<a href="javascript:;" id="DropdownTeoria" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" class="nav-item nav-link user-action"><i class="fa-solid fa-books"></i><span class="dropdown-toggle">تؤوريا</span></a>');
sethomeHTML.push('<div class="dropdown-menu dropdown-menu-end" aria-labelledby="DropdownTeoria">');


sethomeHTML.push('<a href="?page=signalsPage" onclick="sethtmlcontainer(\'signalsPage\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-triangle"></i> إشارات المرور</a>');
sethomeHTML.push('<a href="?page=ProgramPDF" onclick="sethtmlcontainer(\'ProgramPDF\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-book"></i> منهاج التؤوريا</a>');

sethomeHTML.push('<a href="?page=TrafficLawPage" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'TrafficLawPage\');return false"><i class="fa-solid fa-scale-balanced"></i> قانون المرور</a>');

sethomeHTML.push('</div></div>');


sethomeHTML.push('<div class="nav-item dropdown">');
sethomeHTML.push('<a href="javascript:;" id="DropdownProcedures" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" class="nav-item nav-link user-action"><i class="fa-solid fa-address-card"></i><span class="dropdown-toggle">إجراءات</span></a>');
sethomeHTML.push('<div class="dropdown-menu dropdown-menu-end" aria-labelledby="DropdownProcedures">');
sethomeHTML.push('<a href="#exammodal1" onclick="exammodal(1);return false" class="dropdown-item splash-default ripple d-none" data-bs-toggle="modal" data-bs-target="#ExamModal"><i class="fa-solid fa-graduation-cap"></i> نتيجة إمتحان التؤوريا</a>');
sethomeHTML.push('<a href="#exammodal2" onclick="exammodal(2);return false" class="dropdown-item splash-default ripple d-none" data-bs-toggle="modal" data-bs-target="#ExamModal"><i class="fa-solid fa-graduation-cap"></i> نتيجة الإمتحان العملي</a>');
sethomeHTML.push('<a href="#getalls" onclick="getalls();return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-graduation-cap"></i> نتيجة الإمتحان </a>');
sethomeHTML.push('<a href="#steps" onclick="steps();return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-address-card"></i> إجراءات رخصة السياقة</a>');
sethomeHTML.push('<a href="#services1" onclick="services(1);return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-calendar-days"></i> مواعيد خدمات الدوائر</a>');
sethomeHTML.push('<a href="#lessons" onclick="lessons();return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-square-dollar"></i> اسعار الدروس والتستات</a>');
sethomeHTML.push('<a href="#CoursesModal" onclick="coursesModal();return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-circle-dollar"></i> اسعار الدورات الاستكمالية</a>');
sethomeHTML.push('</div></div>');




sethomeHTML.push('<div class="nav-item dropdown d-none">');
sethomeHTML.push('<a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-item nav-link dropdown-toggle user-action"><img src="file/img/site/SidebarLogo.svg" width="120" height="120" class="avatar" alt="Avatar"><span class="userName"> Antonio Moreno <b class="caret"></b></span></a>');
sethomeHTML.push('<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">');
sethomeHTML.push('<a href="#" class="dropdown-item splash-default ripple"><i class="fa-solid fa-user"></i> ملفي الشخصي</a>');
sethomeHTML.push('<div class="divider dropdown-divider"></div>');
sethomeHTML.push('<a href="#" class="dropdown-item splash-default ripple"><i class="fa-solid fa-power-off"></i> تسجيل خروج</a>');
sethomeHTML.push('</div></div>');

sethomeHTML.push('<div class="nav-item dropdown">');
sethomeHTML.push('<a href="#" id="DropdownProcedures" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" class="nav-item nav-link user-action"><i class="fa-solid fa-gear"></i><span class="dropdown-toggle">إعدادت</span></a>');

sethomeHTML.push('<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuSetting">');

sethomeHTML.push('<a href="?page=privacy" onclick="sethtmlcontainer(\'privacy\');return false" class="dropdown-item splash-default ripple"><i class="fas fa-tasks me-2"></i>سياسة الخصوصية</a>');




sethomeHTML.push('<a href="?page=ContactUsPage" onclick="sethtmlcontainer(\'ContactUsPage\');return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-envelope me-2"></i>إتصل بنا</a>');
sethomeHTML.push('<div class="divider dropdown-divider  d-none"></div>');
sethomeHTML.push('<a href="#" class="dropdown-item splash-default ripple d-none"><i class="fa-solid fa-power-off"></i> تسجيل خروج</a>');
sethomeHTML.push('</div></div>');



sethomeHTML.push('</div></div></nav>');
sethomeHTML.push('</div>');
sethomeHTML.push('<div id="container"></div>');




sethomeHTML.push('<div class="fade modal"aria-hidden="true"aria-labelledby="modalCourses"id="CoursesModal"tabindex="-1"><div class="modal-dialog modal-fullscreen-sm-down"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"id="modalCourses">الأسعار الرسمية</h5><button class="btn-close"data-bs-dismiss="modal"type="button"aria-label="Close"></button></div><div class="modal-body">التسعيرة الرسمية للدورات الاستكمالية من وزارة النقل والمواصلات الفلسطينية والتي بدأ العمل بها من تاريخ 27/07/2011 حسب قرار مدير عام سلطة الترخيص:<table class="table table-striped"style="font-size:.8em"><thead><tr><th scope="col fs-6">نوع الدورة</th><th scope="col">الرسوم</th><th scope="col">عدد الساعات</th></tr></thead><tbody><tr><td>عمومي وباص</td><td>1700</td><td>172</td></tr><tr><td>شحن ثقيل</td><td>1700</td><td>154</td></tr><tr><td>مدربي سياقة</td><td>5400</td><td>600 منها 34 عملي</td></tr><tr><td>مدراء مهنيين لمدارس سياقة</td><td>3000</td><td>250</td></tr><tr><td>محاضري قوانين سير</td><td>3600</td><td>280</td></tr><tr><td>سائقي مركبات اسعاف</td><td>3000</td><td>129 نظري</td></tr><tr><td>سائقي مركبات الجر والتخليص</td><td>1900</td><td>208</td></tr><tr><td>سائقي الجرار (التركتور)</td><td>1100</td><td>44</td></tr><tr><td>سائقي الرافعات الشوكية</td><td>500</td><td>19 نظري + 8 عملي</td></tr><tr><td>فاحصي المركبات</td><td>3000</td><td>150 نظري + 20 عملي</td></tr><tr><td>فاحصي السياقة</td><td>4000</td><td>368 نظري + 52 عملي</td></tr><tr><td>المدراء المهنيين للكراجات</td><td>2700</td><td>147 نظري + 20 عملي</td></tr><tr><td>ضباط السلامة والأمن</td><td>5000</td><td>452 نظري + 18عملي</td></tr><tr><td>نقل المواد الخطرة</td><td>2600</td><td>38</td></tr><tr><td>السياقة المانعة</td><td>500</td><td>20</td></tr><tr><td>السياقة النظرية (التؤوريا)</td><td>200</td><td>10</td></tr></tbody></table><span class="text-black-50"style="font-size:12px">- التسعيرة بالشيكل<br>- الرسوم لا تشمل القرطاسية</span></div><div class="modal-footer"><button class="btn btn-secondary"data-bs-dismiss="modal"type="button">إغلاق</button></div></div></div></div>');
sethomeHTML.push('<div class="fade modal"aria-hidden="true"aria-labelledby="modalExam"id="ExamModal"tabindex="-1"><div class="modal-dialog modal-fullscreen-sm-down"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"id="modalExam"></h5><button class="btn-close"data-bs-dismiss="modal"type="button"aria-label="Close"></button></div><div class="modal-body p-0"><iframe allowfullscreen frameborder="0"height="100%"id="iframeExam"style="min-height:700px"width="100%"></iframe></div><div class="modal-footer"><button class="btn btn-secondary"data-bs-dismiss="modal"type="button">إغلاق</button></div></div></div></div>');




sethomeHTML.push('<div class="d-flex flex-column flex-shrink-0 offcanvas offcanvas-start overflow-auto sidebars offcanvas-default" id="sidebarLink" style="width: 280px;" tabindex="-1">');
sethomeHTML.push('<div class="offcanvas-header bg-default">');
sethomeHTML.push('<div class="container">');
sethomeHTML.push('<div class="row">');
sethomeHTML.push('<div class="col-sm-8 w-50 ff-ar2">');
sethomeHTML.push('القائمة');
sethomeHTML.push('</div>');
sethomeHTML.push('<div class="col-sm-4 w-50">');
sethomeHTML.push('<button aria-label="Close" class="btn-close btn-close shadow-none py-2 mx-2" data-bs-dismiss="offcanvas" style="left:10px;position:absolute;" type="button">');
sethomeHTML.push('</button>');
sethomeHTML.push('</div>');
sethomeHTML.push('</div>');
sethomeHTML.push('</div>');
sethomeHTML.push('</div>');
sethomeHTML.push('<div class="offcanvas-body">');
sethomeHTML.push('<ul class="list-unstyled ps-0 mt-2" id="userlistRigth">');
sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<a href="?page=HomePage" onclick="sethtmlcontainer(\'HomePage\');return false" class="btn align-items-center rounded collapsed px-1 btn-single" data-bs-dismiss="offcanvas">');
sethomeHTML.push('<i class="fa fa-home me-3"></i>');
sethomeHTML.push('<span>الرئيسية</span>');
sethomeHTML.push('</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<button aria-expanded="true" class="btn btn-toggle align-items-center rounded collapsed px-1" data-bs-target="#exams-collapse" data-bs-toggle="collapse">');
sethomeHTML.push('<i class="fa-solid fa-messages-question me-3" style="line-height:inherit"></i>');
sethomeHTML.push('الأسئلة');
sethomeHTML.push('</button>');
sethomeHTML.push('<div class="collapse show" id="exams-collapse">');
sethomeHTML.push('<ul class="nav nav-pills flex-column mb-3">');
sethomeHTML.push('<li class="nav-item border-top my-2 w-75 m-auto"></li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=private" onclick="sethtmlcontainer(\'private\');return false" class="dropdown-item splash-default ripple">');
sethomeHTML.push('<i class="fa-solid fa-car-side mx-2"></i>خصوصي</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=truck" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'truck\');return false">');
sethomeHTML.push('<i class="fa-solid fa-truck mx-2"></i>شحن خفيف</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=haulage" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'haulage\');return false">');
sethomeHTML.push('<i class="fa-solid fa-truck-container-empty mx-2"></i>شحن ثقيل</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=taxi" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'taxi\');return false"><i class="fa-solid fa-taxi-bus mx-2"></i>عمومي</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=tractor" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'tractor\');return false"><i class="fa-solid fa-tractor mx-2"></i>تراكتور</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=motorcycle" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'motorcycle\');return false"><i class="fa-solid fa-motorcycle mx-2"></i>دراجة نارية</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=AllExamsPage" onclick="sethtmlcontainer(\'AllExamsPage\');return false" class="dropdown-item splash-default ripple">');
sethomeHTML.push('<i class="fa-solid fa-messages-question mx-2"></i>مشاهدة الكل</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=tableUserPage" onclick="sethtmlcontainer(\'tableUserPage\');return false" class="dropdown-item splash-default ripple">');
sethomeHTML.push('<i class="fa-solid fa-user mx-2"></i>إختباراتي</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('</ul>');
sethomeHTML.push('</div>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<button aria-expanded="true" class="btn btn-toggle align-items-center rounded collapsed px-1" data-bs-target="#teoria-collapse" data-bs-toggle="collapse">');
sethomeHTML.push('<i class="fa-solid fa-books me-3" style="line-height:inherit"></i>');
sethomeHTML.push('تؤوريا');
sethomeHTML.push('</button>');
sethomeHTML.push('<div class="collapse show" id="teoria-collapse">');
sethomeHTML.push('<ul class="nav nav-pills flex-column mb-3">');
sethomeHTML.push('<li class="nav-item border-top my-2 w-75 m-auto"></li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=signalsPage" onclick="sethtmlcontainer(\'signalsPage\');return false" class="dropdown-item splash-default ripple">');
sethomeHTML.push('<i class="fa-solid fa-triangle mx-2"></i>إشارات المرور</a>');
sethomeHTML.push('</li>');





sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=ProgramPDF" onclick="sethtmlcontainer(\'ProgramPDF\');return false" class="dropdown-item splash-default ripple">');
sethomeHTML.push('<i class="fa-solid fa-book mx-2"></i>منهاج التؤوريا</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=TrafficLawPage" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'TrafficLawPage\');return false">');
sethomeHTML.push('<i class="fa-solid fa-scale-balanced mx-2"></i>قانون المرور</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('</ul></div></li>');
sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<button aria-expanded="true" class="btn btn-toggle align-items-center rounded collapsed px-1" data-bs-target="#procedures-collapse" data-bs-toggle="collapse">');
sethomeHTML.push('<i class="fa-solid fa-address-card me-3" style="line-height:inherit"></i>');
sethomeHTML.push('إجراءات');
sethomeHTML.push('</button>');
sethomeHTML.push('<div class="collapse show" id="procedures-collapse">');
sethomeHTML.push('<ul class="nav nav-pills flex-column mb-3">');
sethomeHTML.push('<li class="nav-item border-top my-2 w-75 m-auto"></li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#exammodal1" onclick="exammodal(1);return false" data-bs-dismiss="offcanvas" class="dropdown-item splash-default ripple d-none" data-bs-toggle="modal" data-bs-target="#ExamModal">');
sethomeHTML.push('<i class="fa-solid fa-graduation-cap mx-2"></i>نتيجة إمتحان التؤوريا</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#exammodal2" onclick="exammodal(2);return false" data-bs-dismiss="offcanvas" class="dropdown-item splash-default ripple d-none" data-bs-toggle="modal" data-bs-target="#ExamModal">');
sethomeHTML.push('<i class="fa-solid fa-graduation-cap mx-2"></i>نتيجة الإمتحان العملي</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#getallsWithTimeout500" onclick="getallsWithTimeout(500);return false" class="dropdown-item splash-default ripple" data-bs-dismiss="offcanvas">');
sethomeHTML.push('<i class="fa-solid fa-graduation-cap mx-2"></i>نتيجة الإمتحان</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#steps" onclick="steps();return false" class="dropdown-item splash-default ripple" data-bs-dismiss="offcanvas">');
sethomeHTML.push('<i class="fa-solid fa-address-card mx-2"></i>إجراءات رخصة السياقة</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#services" onclick="services(1);return false" class="dropdown-item splash-default ripple" data-bs-dismiss="offcanvas">');
sethomeHTML.push('<i class="fa-solid fa-calendar-days mx-2"></i>مواعيد خدمات الدوائر</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#lessons" onclick="lessons();return false" class="dropdown-item splash-default ripple" data-bs-dismiss="offcanvas"><i class="fa-solid fa-square-dollar mx-2"></i>اسعار الدروس والتستات</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="#CoursesModal" onclick="coursesModal();return false" class="dropdown-item splash-default ripple"><i class="fa-solid fa-circle-dollar mx-2"></i>اسعار الدورات الاستكمالية</a>');
sethomeHTML.push('</li></ul></div></li>');



sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<button aria-expanded="false" class="btn btn-toggle align-items-center rounded collapsed px-1" data-bs-target="#colors-collapse" data-bs-toggle="collapse">');
sethomeHTML.push('<i class="fa-solid fa-bolt me-3" style="line-height:inherit"></i>');
sethomeHTML.push('لون التصميم');
sethomeHTML.push('</button>');
sethomeHTML.push('<div class="collapse" id="colors-collapse">');
sethomeHTML.push('<ul class="nav nav-pills flex-column mb-auto">');
sethomeHTML.push('<li class="nav-item border-top my-2 w-75 m-auto"></li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'primary\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-primary fa-stack-1x fa-inverse"></i></span> primary</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'secondary\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-secondary fa-stack-1x fa-inverse"></i></span> secondary</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'success\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-success fa-stack-1x fa-inverse"></i></span> success</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'danger\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-danger fa-stack-1x fa-inverse"></i></span> danger</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'warning\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-warning fa-stack-1x fa-inverse"></i></span> warning</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'info\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-info fa-stack-1x fa-inverse"></i></span> info</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'light\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-lights"></i><i class="fa-solid fa-bolt text-light fa-stack-1x fa-inverse"></i></span> light</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'dark\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-dark fa-stack-1x fa-inverse"></i></span> dark</a>');
sethomeHTML.push('</li>');

sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="javascript:;" onclick="setSiteColor(\'purple\')" class="dropdown-item splash-default ripple"><span class="fa-stack fa-sm"><i class="fa fa-circle fa-stack-2x text-light"></i><i class="fa-solid fa-bolt text-purple fa-stack-1x fa-inverse"></i></span> purple</a>');
sethomeHTML.push('</li>');



sethomeHTML.push('</ul></div></li>');




sethomeHTML.push('<li class="mb-1">');
sethomeHTML.push('<button aria-expanded="false" class="btn btn-toggle align-items-center rounded collapsed px-1" data-bs-target="#info-collapse" data-bs-toggle="collapse">');
sethomeHTML.push('<i class="fa-solid fa-circle-info me-3" style="line-height:inherit"></i>');
sethomeHTML.push('حول');
sethomeHTML.push('</button>');
sethomeHTML.push('<div class="collapse" id="info-collapse">');
sethomeHTML.push('<ul class="nav nav-pills flex-column mb-auto">');
sethomeHTML.push('<li class="nav-item border-top my-2 w-75 m-auto"></li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=privacy" onclick="sethtmlcontainer(\'privacy\');return false" class="dropdown-item splash-default ripple"><i class="fas fa-tasks mx-2"></i>سياسة الخصوصية</a>');
sethomeHTML.push('</li>');
sethomeHTML.push('<li class="nav-item">');
sethomeHTML.push('<a href="?page=ContactUsPage" class="dropdown-item splash-default ripple" onclick="sethtmlcontainer(\'ContactUsPage\');return false"><i class="fa-solid fa-envelope mx-2"></i>إتصل بنا</a>');
sethomeHTML.push('</li></ul></div></li>');









sethomeHTML.push('</ul></div>');
sethomeHTML.push('<div class="dropdown dropup offcanvas-footer bg-default py-3 px-2">');
sethomeHTML.push('<div class="text-center fa-2xs">');
sethomeHTML.push('Power By PalMix');
sethomeHTML.push('</div>');
sethomeHTML.push('</div>');
sethomeHTML.push('</div>');
sethomeHTML.push('<div class="toast-container position-fixed bottom-0 end-0 p-3" id="alltoast" style="z-index:9999"></div>');


sethomeHTML.push('<button type="button" class="btn btn-default rounded-circle p-2 shadow fs-4 p-3 splash-default ripple" id="btnOffcanvas"><i class="fa-solid fa-bars"></i></button>');
sethomeHTML.push('<button type="button" class="btn btn-default rounded-circle p-2 shadow fs-4 p-3 splash-default ripple" onclick="scrollGoTo(\'#palmix\');" id="btnToTop"><i class="fa-solid fa-arrow-up-to-line"></i></button>');






//$('#palmix').attr('data-navbar-theme','purple');


$('#palmix').html(sethomeHTML.join('')).addClass('container-lg px-0');



let examModal=$('#ExamModal');
let CoursesModal=$('#CoursesModal');
examModal.on('shown.bs.modal', function (event) {
var gets = $("#iframeExam").attr('data-num');
if(gets == "1"){
 $("#modalExam").html('نتيجة إمتحان التؤوريا');
 $("#iframeExam").attr('src','https://portal.mot.gov.ps/drive_exam_check.php');
 }else if(gets == "2"){
 $("#modalExam").html('نتيجة الإمتحان العملي');
 $("#iframeExam").attr('src','https://portal.mot.gov.ps/practical_exam_check.php');
 }
});
examModal.on('hide.bs.modal', function(event) {
window.location.hash = "ExitModal";
 $("#iframeExam").attr('src','');
 $("#modalExam").html('');
})
$('#iframeExam').on('load', function() {
 var m = $("#iframeExam").attr('data-set');
 if(m == "0"){
 $("#ExamModal").modal('hide');
 }
 $("#iframeExam").attr('data-set','0');
});





CoursesModal.on('hide.bs.modal', function(event) {
window.location.hash = "ExitModal";
})




var sidebarLink = document.getElementById('sidebarLink')
sidebarLink.addEventListener('hide.bs.offcanvas', function () {
window.location.hash = "ExitModal";
})


const btnOffcanvas = document.getElementById("btnOffcanvas");
const btnOffcanvas2 = document.getElementById("btnOffcanvas2");
btnOffcanvas.addEventListener("click", function() {
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "sidebarLink";
}, 200)


});
btnOffcanvas2.addEventListener("click", function() {
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "sidebarLink";
}, 200)
});

}


function setbtop() {
setTimeout(() => {
navbarScroll()

showPage(false);

}, 1000)
}



function coursesModal() {
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "CoursesModal";
}, 300)
}


//set quiz page
function examPage(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];
setHTML.push('<div class="col-12 text-center py-2 containeranimate">');
setHTML.push('<div class="card text-dark mx-1">');
setHTML.push('<div class="card-header" id="titlecardtype">قائمة الإمتحانات</div>');
setHTML.push('<div class="card-body px-0">');
setHTML.push('<div class="owl-carousel owl-theme align-items-center" id="linkqnumber">');
setHTML.push('</div></div></div></div></div>');
setHTML.push('<div class="container-lg px-0 pt-2 overflow-hidden containeranimate">');
setHTML.push('<div class="row">');
setHTML.push('<div class="col-12 text-center my-2 overflow-hidden containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');
setHTML.push('<div class="col-sm-12 col-md-8">');
setHTML.push('<div class="progress progressd progressMobile rounded-0">');
setHTML.push('<div id="progressquizmobile" class="progress-bar bg-default progress-bar-striped progress-bar-animated" role="progressbar" style="width:0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="30">التقدم 0%</div>');
setHTML.push('</div>');
if($(window).width() <= 750){
setHTML.push('<table id="quiz" class="table table-responsive">');
}else{
setHTML.push('<table id="quiz" class="table table-hover-default table-responsive">');
}
setHTML.push('<thead class="table-Secondary">');
setHTML.push('<th scope="row" id="questionNum">1</th>');
setHTML.push('<td id="question">');
setHTML.push('<span class="question 1p-2"></span>');
setHTML.push('<span class="questionID d-none"></span>');
setHTML.push('</td>');
setHTML.push('</thead>');
setHTML.push('<tbody class="table-group-divider">');
setHTML.push('<tr id="answer1" class="option answer1" data-num="1">');
setHTML.push('<th scope="row" class="splash-default ripple">أ</th>');
setHTML.push('<td class="an_content splash-default ripple"></td>');
setHTML.push('</tr>');
setHTML.push('<tr id="answer2" class="option answer2" data-num="2">');
setHTML.push('<th scope="row" class="splash-default ripple">ب</th>');
setHTML.push('<td class="an_content splash-default ripple" colspan="2"></td>');
setHTML.push('</tr>');
setHTML.push('<tr id="answer3" class="option answer3" data-num="3">');
setHTML.push('<th scope="row" class="splash-default ripple">ج</th>');
setHTML.push('<td class="an_content splash-default ripple"></td>');
setHTML.push('</tr>');
setHTML.push('<tr id="answer4" class="option answer4" data-num="4">');
setHTML.push('<th scope="row" class="splash-default ripple">د</th>');
setHTML.push('<td class="an_content splash-default ripple"></td>');
setHTML.push('</tr>');
setHTML.push('</tbody>');
setHTML.push('</table>');
setHTML.push('<div class="d-grid gap-2 col-6 mx-auto sendAnswers d-none">');
setHTML.push('<button class="btn btn-success shadow-none" id="sendAnswers" type="button"><i class="fa-solid fa-paper-plane"></i> إرسـال</button>');
setHTML.push('</div>');
setHTML.push('<div class="btn-group me-2 my-4 input-group d-flex align-items-center px-1" role="group" aria-label="btn group">');
setHTML.push('<button type="button" id="backBtn" class="btn btn-outline-default shadow-none splash-default ripple"><i class="fa-solid fa-chevron-right ml-2"></i> السابق</button>');
setHTML.push('<span class="input-group-text" id="textques"></span>');
setHTML.push('<button type="button" id="nextBtn" class="btn btn-outline-default shadow-none splash-default ripple">التالي <i class="fa-solid fa-chevron-left"></i></button>');
setHTML.push('</div></div>');
setHTML.push('<div class="col">');
setHTML.push('<div class="container-xl px-2" id="leftetting" style="max-width:x279px">');


setHTML.push('<div class="card mb-3 d-none" id="alerts">');
setHTML.push('<div class="card-header"></div>');
setHTML.push('<div class="card-body">');
setHTML.push('<h5 class="card-title ff-ar1"></h5>');
setHTML.push('<p class="card-text"></p>');
setHTML.push('</div></div>');


setHTML.push('<div id="alertSite">');
setHTML.push('</div>');


setHTML.push('<div class="row d-none" id="totalQuesId">');
setHTML.push('<div class="col-auto me-auto"><span>نتيجة الإمتحان</span></div>');
setHTML.push('<div class="col-auto"><span class="totalQues">0</span><span>/</span><span class="trueQues">0</span></div>');
setHTML.push('</div>');
setHTML.push('<div class="showAansQuiz">');
setHTML.push('<div class="row progressd progressDesktop">');
setHTML.push('<div class="col-auto me-auto"><span>التقدم</span></div>');
setHTML.push('<div class="col-auto totalAnswers"><span>30/0</span></div>');
setHTML.push('</div>');
setHTML.push('<div class="row px-0 py-1 progressd progressDesktop">');
setHTML.push('<div class="col">');
setHTML.push('<div class="progress">');
setHTML.push('<div id="progressquiz" class="progress-bar bg-default progress-bar-striped bg-default progress-bar-animated" role="progressbar" style="width:0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="30">0%</div>');
setHTML.push('</div></div></div></div>');
setHTML.push('<div class="row py-1">');
setHTML.push('<div class="col-auto me-auto" id="chautoNext">');

setHTML.push('<div class="form-check form-switch'+formswitchlg+'">');
setHTML.push('<input class="form-check-input form-check-default" type="checkbox" role="switch" id="autoNext">');
setHTML.push('<span><label class="form-check-label" for="autoNext">إنتقال تلقائي</label></span>');
setHTML.push('</div>');
setHTML.push('</div>');



setHTML.push('<div class="col-auto quiz-timer">');
setHTML.push('<span><i class="fa-solid fa-timer mx-1" style=margin-bottom:-2px></i></span>');
setHTML.push('<span id="quiz-timer">40:00</span>');
setHTML.push('</div></div>');











setHTML.push('<div class="offcanvas offcanvas-bottom" tabindex="-1" data-bs-scroll="true" data-bs-backdrop="false" id="text-size-quiz" aria-labelledby="text-size-quiz">');
setHTML.push('<div class="offcanvas-header bg-default">');
setHTML.push('<div class="container">');
setHTML.push('<div class="row">');
setHTML.push('<div class="col-10 ff-ar2">');
setHTML.push('تعديل حجم الخط');
setHTML.push('</div>');
setHTML.push('<div class="col-2">');
setHTML.push('<button aria-label="Close" class="btn-close btn-close shadow-none py-2 mx-2" data-bs-dismiss="offcanvas" style="left:10px;position:absolute;" type="button">');
setHTML.push('</button>');
setHTML.push('</div></div></div></div>');
setHTML.push('<div class="offcanvas-body py-0">');
setHTML.push('<div class="btn-group input-group d-flex align-items-center px-1 mt-2" role="group" aria-label="btn group">');
setHTML.push('<button type="button" id="text-large" class="btn btn-lg btn-outline-default shadow-none splash-default ripple fontsize fontsizes"><i class="fa-solid fa-minus"></i></button>');
setHTML.push('<div class="input-group-text" id="textsizeques">100</div>');
setHTML.push('<button type="button" id="text-small" class="btn btn-lg btn-outline-default shadow-none splash-default ripple fontsize fontsizel"><i class="fa-solid fa-plus"></i></button>');
setHTML.push('</div>');
setHTML.push('<div class="d-grid gap-1 col-6 mx-auto">');
setHTML.push('<button type="button" data-bs-dismiss="offcanvas" class="btn btn-default shadow-none splash-default ripple my-2">تـــم</button>');
setHTML.push('</div>');
setHTML.push('</div></div>');


var setDnone = "";
if(TeoriaPalMixApp){
setDnone = "d-none"
}


setHTML.push('<div class="row py-1 d-flix '+setDnone+'" id="fontsize" data-fs="100">');
setHTML.push('<div class="col-auto me-auto"><span class="lh-lg"><i class="fa-solid fa-text-size"></i> حجم الخط</span>');
setHTML.push('<button class="btn btn-sm btn-outline-default border-0 shadow-none splash-default ripple" type="button" id="btn-size-quiz"><i class="fa-solid fa-window-restore"></i></button>');


setHTML.push('</div>');

setHTML.push('<div class="col-auto quiz-timer">');
setHTML.push('<div class="btn-group" role="group">');
setHTML.push('<button type="button" class="btn btn-sm btn-outline-default shadow-none fontsize fontsizes"><i class="fa-solid fa-minus"></i></button>');
setHTML.push('<button type="button" class="btn btn-sm btn-outline-default shadow-none fontsize fontsizel"><i class="fa-solid fa-plus"></i></button>');
setHTML.push('</div></div></div>');
setHTML.push('<div class="row py-1">');

setHTML.push('<div class="col quizNumpers">');

setHTML.push('<div class="card-header border rounded-top mb-1 text-center">');
setHTML.push('رقم السؤال');
setHTML.push('</div>');

setHTML.push('<div class="row row-cols-5 row-cols-sm-6 row-cols-md-5 g-1 g-lg-1 align-items-center" id="allquis">');
setHTML.push('<div class="d-flex justify-content-center mt-5 m-auto">');
setHTML.push('<div class="spinner-border" role="status">');
setHTML.push('<span class="visually-hidden">إنتظر...</span>');
setHTML.push('</div></div></div></div></div></div></div></div></div>');



setHTML.push('<div class="col-12 text-center my-2 overflow-hidden containeranimate">');
setHTML.push('<div id="'+adSlotCenter+'"></div>');
setHTML.push('</div>');

setHTML.push('<div id="tablequiz" class="container-lg px-0 mt-3 containeranimate"> ');
setHTML.push('</div>');

setHTML.push('<div class="col-12 text-center my-2 overflow-hidden containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');




document.title = "نموذج إمتحان تؤوريا";
var htmlset = setHTML.join('');
$('#container').html(htmlset);



$(".fontsize").click(function(){
var thisx =$(this).hasClass('fontsizel');
var getfs = $("#fontsize").attr('data-fs');
getfs = parseInt(getfs);
setFontSize(getfs,thisx)
});



const btnOffcanvassize = document.getElementById("btn-size-quiz");
btnOffcanvassize.addEventListener("click", function() {

btnfontsizequiz();

});






var bodyOffcanvassize = document.getElementById('text-size-quiz')
bodyOffcanvassize.addEventListener('hide.bs.offcanvas', function () {
if(window.location.hash != "#ExitModal"){
window.location.hash = "ExitModal";
}
})


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom);

$( "#linkqnumber" ).hover(function() {
 if(scrollY == 0){
window.scrollTo(0, 1);
}
 });

}


//set quiz page
function trafficLaw(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];


setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');

setHTML.push('<div class="container containeranimate"><div class="row"><div class="col-md-12 text-center"><h1 class="mb-4">القانون</h1><p>قانون المرور<br>رقم -5- لسنة 2000<br>رئيس اللجنة التنفيذية لمنظمة التحرير الفلسطينية.<br>رئيس السلطة الوطنية الفلسطينية.</p></div><div class="col-md-12"><p>بعد الاطلاع على قانون النقل على الطرق رقم (23) لسنة 1929م وتعديلاته المعمول به في محافظات غزة. وعلى الأمر رقم (354) لسنة 1970م، بشأن المرور وتعديلاته المعمول به في محافظات الضفة. وعلى الأمر رقم (1310) لسنة 1992م، بشأن المرور وتعديلاته المعمول به في محافظات الضفة. وعلى ما عرضه وزير النقل والمواصلات. وعلى مشروع القانون المقدم من مجلس الوزراء. وبعد إقرار المجلس التشريعي،</p><p>أصدرنا القانون التالي:</p></div><div class="col-md-12"><h4 class="text-primary"><strong>الباب الأول</strong></h4><h4 class="text-success">تعاريف</h4></div><div class="col-md-12"><h5>مادة (1)</h5><p>في تطبيق أحكام هذا القانون يكون للكلمات وللعبارات التالية المعاني المخصصة لها أدناه ما لم تدل القرينة على خلاف ذلك.</p><p><strong>الوزارة:</strong> وزارة النقل والمواصلات.<br><strong>الوزير:</strong> وزير النقل والمواصلات.<br><strong>السلطة المختصة:</strong> الوزير أو من يخوله بعض صلاحياته.<br><strong>سلطة الترخيص:</strong> من يكلفه الوزير مديراً عاماً لدوائر الترخيص في وزارة النقل والمواصلات أو من يفوضه المدير العام بعض صلاحياته.<br><strong>سلطة الشاخصات المحلية:</strong> من يعينه مراقب المرور لتحديد مواقع الشاخصات لمنطقة معينة.<br><strong>نادي السيارات الفلسطيني:</strong> مؤسسة فوضت من قبل الوزير بإصدار الرخص الدولية للمركبات وقائديها.<br><strong>مثمن المركبات:</strong> كل من يحمل شهادة مثمن مركبات صادرة عن سلطة الترخيص.<br><strong>الفاحص:</strong> من عينته سلطة الترخيص فاحصاً بمقتضى القانون والأنظمة الصادرة بموجبه كلها أو بعضها.<br><strong>الشرطي:</strong> كل شرطي مرور أو من تحدده القوانين والأنظمة بهذه الصفة.<br><strong>مراقب المرور:</strong> من يعينه الوزير مراقباً على المرور في جميع الأراضي الفلسطينية.<br><strong>المالك:</strong> من سجل اسمه في رخصة المركبة أو حاز المركبة بموجب اتفاق شراء من مالكها الأصلي.<br><strong>الراكب:</strong> الشخص الراغب في السفر والذي يدفع أجرة السفر أو المستعد لدفعها.<br><strong>المعاق:</strong> كل شخص صادقت عليه اللجنة الطبية المختصة المعينة بقرار من وزير الصحة بأنه يتوفر فيه أحد الأمرين التاليين:<br>-أنه معاق ويحتاج لمركبة كوسيلة حركة بسبب عجز في كلتا رجليه.<br>-أن درجة إعاقته تزيد عن 60% وأن سيره في الطريق بدون مركبة من شأنه أن يضعف حالته الصحية.<br><strong>عابر الطريق:</strong> من يستعمل الطريق للسفر أو المشي أو الوقوف.<br><strong>الحيوان:</strong> الدواب والحيوانات الأليفة باستثناء الكلاب والقطط والطيور.<br><strong>إعطاء حق الأولوية:</strong> عدم مواصلة قائد المركبة السير أو عدم البدء فيه إذا كان استمرار سيره سيعرض قادة المركبات الآخرين للتحول عن خط سيرهم أو تغيير سرعتهم.<br><strong>الليل:</strong> فترة الوقت التي تبدأ بعد ربع ساعة من غروب الشمس وتنتهي قبل ربع ساعة من شروقها.<br><strong>وقت الإنارة:</strong> الليل وكل وقت آخر تكون فيه الرؤية غير واضحة بسبب حالة الطقس أو لأي سبب آخر.<br><strong>تخفيف النور:</strong> إطفاء النور الكبير في المصابيح الأمامية وإنارة النور الصغير.<br><strong>الشاخصة:</strong> أية خطوط أو إشارة ضوئية أو رموز أو كلمات أو عبارات ذات دلالات معروفة ترسم أو تكتب على الطريق أو تثبت على جوانبها أو فوقها وضعت بمعرفة السلطة المختصة لتنظيم حركة السير وإرشاد مستعملي الطريق.<br><strong>الطريق:</strong> كل سبيل مفتوح للسير العام سواء للمشاة أو الحيوانات أو لوسائل النقل أو الجر ويشمل على سبيل المثال الطرقات والشوارع والساحات والممرات والجسور التي يجوز للناس عبورها.<br><strong>الطريق السريع:</strong> كل طريق خارج المدن ذو اتجاهين أو أكثر تفصل بينهما منطقة فاصلة وخصص لحركة المركبات الآلية فقط وكل منهما ذو مسلكين على الأقل بكل اتجاه ولا يمكن الوصول إليه من أفنيه مجاورة وهو خالٍ من ملتقيات السكة الحديد أو لمفترقات باستثناء اندماجات الطرق ووضعت في مدخله شاخصة تدل على أنه طريق سريع.<br><strong>طريق ذات اتجاه واحد:</strong> كل طريق مسموح فيها بحركة لسير في اتجاه واحد.<br><strong>طريق المركبات:</strong> قسم من الطريق معد لسير المركبات فقط.<br><strong>طريق بلدية:</strong> كل طريق يقع ضمن اختصاصات سلطة محلية أو سلطات محلية تتاخم إحداهما الأخرى ووضعت في مدخل ذلك المكان شاخصة معناها مدخل إلى طريق داخل مدينة أو قرية وذلك حتى المكان الذي وضعت فيه شاخصة معناها نهاية حدود طريق البلدية.<br><strong>السبيل:</strong> طريق أو قسم من طريق بخلاف طريق المركبات خصص لعابري السبيل.<br><strong>المسلك:</strong> أي جزء من الأجزاء الطويلة للطريق ويسمح عرضه بمرور صف واحد من المركبات.<br><strong>ممر عبور المشاة:</strong> المكان المخصص لعبور المشاة ومخطط لهذا الغرض في طريق المركبات.<br><strong>حافة الطريق:</strong> المساحة المجاورة لحافة طريق المركبات الخالية من الرصيف وذلك غاية عرض مقداره ثلاثة أمتار أو حافة قناة الصرف إذا كانت حافة القناة قريبة إلى حافة الطريق بأقل من ثلاثة أمتار.<br><strong>الرصيف:</strong> قسم من عرض الطريق غير معد لسير المركبات ويقع بجانب طريق المركبات وخصص للمارة سواء كان في مستوى طريق المركبات أو أعلى.<br><strong>المساحة الفاصلة:</strong> كل مبنى أو جزيرة أو مكان مرسوم على سطح الطريق أو حديقة أو ساحة غير معبدة أو ما أشبه وتقسم الطريق على امتدادها.<br><strong>خط التوقف:</strong> خط على عرض الطريق المعبدة أو على قسم من عرضها يسير إلى الحد الذي تقف عنده المركبة بالقرب من الإشارة الضوئية أو من شاخصة وقوف إجباري أو قبل ملتقى سكة حديد أو من مكان يقف عنده شرطي يقوم بتوجيه حركة السير.<br><strong>الوقوف:</strong> وجود المركبة في مكان ما لفترة محددة أو غير محددة وليس لغرض نقل الركاب أو إنزالهم أو تحميل شحنة أو تفريغها الفوري.<br><strong>المفترق:</strong> كل تلاقي أو تقابل أو تفرع للطريق على مستوى واحد أو أكثر شاملاً المساحة المكشوفة التي تكونت نتيجة لذلك.<br><strong>ملتقى سكة حديد:</strong> مكان تتقاطع قيه طريق مع سكة حديد على مستوى واحد وجرى وسمه بالشاخصة المقررة لذلك.<br><strong>أجرة السفر:</strong> الأجرة المحددة بمعرفة السلطة المختصة لنقل الركاب والأمتعة.<br><strong>خط السفر:</strong> خط سير المركبة العمومية في سفرة محدده من قبل مراقب المرور.<br><strong>السفرة الخصوصية:</strong> السفرة التي تكون بها المركبة العمومية كلها تحت تصرف المسافر.<br><strong>سفرة الخدمة:</strong> السفرة في مركبة عمومية بحيث يدفع كل راكب أجرته على انفراد.<br><strong>الدراجة العادية:</strong> مركبة ذات عجلتين أو أكثر وغير مجهزة بمحرك آلي وتسير بقوة راكبها.<br><strong>الدراجة الآلية:</strong> مركبة آلية ذات عجلين سواء أكانت مزودة بعربة جانبية أو بدونها.<br><strong>المركبة:</strong> كل وسيلة من وسائل النقل أو الجر أعدت للسير أو الجر على عجلات أو جنزير وتسير بقوة آلية أو جسدية.<br><strong>المركبة الآلية:</strong> كل مركبة آلية تسير بمحرك كهربائي ومعدة حسب تصميمها لنقل ثمانية ركاب عدا قائدها.<br><strong>المركبة الخصوصية:</strong> المركبة المعدة للاستعمال الشخصي.<br><strong>المركبة العمومية:</strong> المركبة المستعملة أو المعدة للاستعمال في نقل ركاب لقاء أجر.<br><strong>مركبة التأجير:</strong> وهي المركبة المسجلة بسلطة الترخيص تحت اسم شركة تأجير للسيارات وتستعمل لأغراض التأجير فقط وحسب النظام .<br><strong>المركبة التجارية:</strong> المركبة المعدة للاستعمال في نقل البضائع لقاء أجرة أو لنقلها فيما يتعلق بأعمال صاحب المركبة أو تجارته.<br><strong>مركبة أمن:</strong> وتشمل مركبة الإسعاف المعدة لنقل المرضى أو مركبة تابعة لقوات الشرطة أو الأمن العام أو مركبة إطفاء الحريق وكل مركبة أخرى صادقت سلطة الترخيص على أنها مركبة أمن وينبعث منها نور خاص متقطع أحمر أو أزرق وتطلق إشارة إنذار بواسطة صافرة أو جرس.<br><strong>مركبة تخليص:</strong> مركبة آلية معدة حسب تصميمها لتنفيذ أعمال تخليص وجر المركبات التي لم تعد صالحة للعمل بشكل مسيطر عليه.<br><strong>مركبة العمل:</strong> مركبة آلية غير معدة لنقل البضائع أو أشخاص وثبت عليها أجهزة عمل ثابتة.<br><strong>المركبة المجددة:</strong> المركبة التي لحقها ضرر إجمالي يتراوح ما بين 75.55% من قيمتها وقرر مثمن المركبات أنها قابلة للتصليح.<br><strong>المركبة القديمة:</strong> كل مركبة عدا الجرار الزراعي والمجرور التي بلغت في يوم تجديد رخصتها عشرين سنة.<br><strong>المركبة الهالكة:</strong> كل مركبة قرر مثمن المركبات بشأنها أنها لم تعد صالحة للاستعمال وأن ضررها الإجمالي يزيد على 75% من قيمتها وأنها غير قابلة للتصليح.<br><strong>الحافلة:</strong>المركبة الآلية المعدة لنقل ثمانية أشخاص أو أكثر عدا قائدها وذكر في رخصتها أنها حافلة.<br><strong>حافلة عمومية:</strong> مركبة عمومية من نوع حافلة مخصصة لنقل ركاب بأجر.<br><strong>حافلة خصوصية:</strong> كل حافلة ليست عمومية وتستعمل في نقل الأشخاص بدون أجر.<br><strong>الحافلة السياحية: </strong>كل حافلة ليست عمومية وتستعمل في نقل الأفواج السياحية أو الرحلات مقابل مبلغ مقطوع .<br><strong>الماكنة المتنقلة:</strong> مركبة آلية معدة حسب تصميمها لتنفيذ أعمال وغير مخصصة للجر.<br><strong>الجرار:</strong> مركبة آلية معدة حسب تصميمها للجر وتنفيذ أية أعمال أخرى.<br><strong>الساندة:</strong> مركبة آلية معدة حسب تصميمها لإسناد وجر مستندة.<br><strong>المستندة:</strong> مقطورة مبنية بشكل يستند فيه قسمها الأمامي على الساندة.<br><strong>المقطورة:</strong> مركبة بدون محرك صممت وضعت لكي تقطرها أو تجرها مركبة آلية.<br><strong>المدرسة:</strong> مدرسة لتعليم قيادة المركبات.<br><strong>المدير المهني:</strong> كل مدرب قيادة حصل على ترخيص بإدارة مدرسة من قبل سلطة الترخيص.<br><strong>مدرب القيادة:</strong> الحاصل على رخصة تعليم قيادة المركبات من قبل سلطة الترخيص.<br><strong>رخصة القيادة:</strong> الإجازة الرسمية الصادرة عن سلطة الترخيص والتي تجيز لصاحبها قيادة مركبة من نوع أو أنواع معنية من المركبات.<br><strong>رخصة القيادة الدولية:</strong> رخصة قيادة تصدر عن نادي السيارات الفلسطيني.<br><strong>رخصة تسيير المركبة:</strong> الإجازة الرسمية الصادرة عن سلطة الترخيص والتي تجيز تسيير المركبة على الطريق طوال مدة صلاحيتها بالشروط المنصوص عليها في القانون.<br><strong>سنة الصنع:</strong> السنة التي سجلتها سلطة الترخيص في رخصة المركبة بأنها سنة الصنع.<br><strong>الطول الإجمالي:</strong> البعد ما بين أقصى نقطعه من مقدمة المركبة وأقصى نقطة من مؤخرتها مقاساً ذلك بخط مستقيم وبصورة عمودية.<br><strong>العرض الإجمالي:</strong> عرض المركبة مقاساً بين المستويين العموديين المتوازيين المارين بين أقصى نقطتين من جانب المركبة.<br><strong>الارتفاع الإجمالي:</strong> الارتفاع العمودي الذي تصل إليه المركبة ابتداء من السطح الذي تقف إليه بعجلاتها إلى أعلى نقطة من جسمها وهي غير محملة.<br><strong>الوزن الإجمالي:</strong> وزن المركبة مضافاً إليه وزن حمولتها.<br><strong>الوزن الفارغ:</strong> وزن المركبة فارغة مضافاً إليها وزن جميع ملحقات المركبة من الوقود والماء والزيت.<br><strong>اللائحة:</strong> اللائحة التنفيذية لهذا القانون.</p></div><div class="col-md-12"><h4 class="text-primary"><strong>الباب الثاني</strong></h4><h4>تسجيل وترخيص المركبات</h4></div><div class="col-md-12"><h4 class="text-success">الفصل الأول</h4><h4>تسجيل المركبات</h4></div><div class="col-md-12"><h5>مادة (2)</h5><p>لا يجوز تسيير أية مركبة على الطريق إلا بعد تسجيلها لدى سلطة الترخيص والحصول على رخصة بتسييرها.</p></div><div class="col-md-12"><h5>مادة (3)</h5><p>ليشترط لتسيير المركبة توافر الشروط التالية:</p><ol><li>أن تكون مطابقة للمواصفات والمقاييس الفلسطينية.</li><li>أن تكون مستوفاة لشروط الأمن والمتانة.</li><li>أن يتم تسجليها لدى سلطة الترخيص، وأن يخصص لها رقم.</li><li>أن تكون المركبة مستوفية لشروط الفحص الفني الذي تحدده سلطة الترخيص.</li><li>أن تكون المركبة مؤمنة طبقاً لما هو وارد في هذا القانون.</li><li>أن يتم سداد رسوم التسجيل والفحص والترخيص المقررة بموجب هذا القانون.</li></ol></div><div class="col-md-12"><h5>مادة (4)</h5><p>تسري رخصة تسيير جميع المركبات لمدة لا تزيد على سنة “ميلادية” باستثناء مركبات العمل والجرار والدراجة العادية بمحرك مساعد وتعطي هذه الأنواع رخصة لا تزيد على سنتين</p></div><div class="col-md-12"><h5>مادة (5)</h5><p>يقدم طلب تسجيل المركبة من قبل مالك المركبة إلى سلطة الترخيص التي يقع سكنه في دائرة نشاطها مرفقاً بالوثائق والمستندات المقررة بمقتضى هذا القانون والأنظمة والتعليمات الصادرة بموجبه.</p></div><div class="col-md-12"><h5>مادة (6)</h5><p>تخضع المركبات للفحص الفني عند تسجيلها لأول مرة في سلطة الترخيص المختصة وفقاً للأنظمة المقررة.</p></div><div class="col-md-12"><h5>مادة (7)</h5><p>إذا وجدت سلطة الترخيص أن جميع الشروط متوافرة في المركبة، فعليها تحصيل الرسوم المقررة قانوناً ومنحها الرخصة المصدقة بخاتم سلطة الترخيص.</p></div><div class="col-md-12"><h5>مادة (8)</h5><p>يشترط تسجيل أية مركبة، كمركبة عمومية أو حافلة عمومية الحصول على رخصة بتسييرها لنقل الركاب بأجر.</p></div><div class="col-md-12"><h5>مادة (9)</h5><p>لا تسجل أية مركبة معدة للاستعمال في نقل سائل أكال أو مادة قابلة للاشتعال أو في نقل مواد خطرة إلا إذا توافرت فيها المواصفات التي أقرتها سلطة الترخيص.</p></div><div class="col-md-12"><h5>مادة (10)</h5><p>يجور لسلطة الترخيص أن تدرج في رخصة تسيير المركبة شروطاً في المواضيع التالية:</p><ol><li>تحديد سرعة قصوى تختلف عما هو محدد في هذا القانون.</li><li>تحديد علامة خاصة بالمركبة.</li><li>إضافة أجهزة وأدوات وملحقات علاوة على ما هو مقرر في هذا القانون.</li><li>تقييد نقل ملكية المركبات بسبب عدم دفع الرسوم الجمركية أ والضرائب المستحقة عنها أو لأي سبب آخر.</li></ol></div><div class="col-md-12"><h5>مادة (11)</h5><p>لا يجوز تسجيل أو تجديد ترخيص المركبات التالية:</p><ol><li>المركبة الهالكة.</li><li>المركبة العمومية إذا زاد عمرها عن ثماني عشرة سنة من سنة صنعها.</li><li>المركبة الخصوصية المخصصة لتعليم القيادة بعد مرور خمس عشرة سنة من سنة صنعها.</li><li>مركبات التخليص والحافلات والمركبات التجارية المخصصة لتعليم القيادة إذا زاد عمرها عن عشرين سنة من سنة صنعها.</li></ol></div><div class="col-md-12"><h5>مادة (12)</h5><ol><li>تعطي المركبة لوحتي تمييز بالشكل الذي تقرره سلطة الترخيص بعد إتمام إجراءات تسجيلها.</li><li>تعتبر لوحات التمييز ملك لسلطة الترخيص ولا يجوز أحداث أي تغيير في شكلها أو في بياناتها أو لونها أو مكانها من المركبة أو السفر بدونها.</li><li>في حالة الاستغناء عن المركبة لعدم صلاحيتها للسير أو طلب نقل قيدها أو تصديرها إلى خارج فلسطين نهائياً أو إيقافها لفترة مؤقتة يجب رد رخصة المركبة ولوحتي التمييز إلى سلطة الترخيص الصادرة عنها.</li><li>في حالة فقدان لوحتي التمييز أو أي منهما- أو تلفهما- يجب إبلاغ سلطة الترخيص الصادرة عنها ومركز الشرطة الذي فقدت بدائرته.</li></ol></div><div class="col-md-12"><h4 class="text-success">الفصل الثاني</h4><h4>ترخيص المركبات</h4></div><div class="col-md-12"><h5>مادة (13)</h5><p>لا يجوز تسيير أية مركبة على الطريق انتهت مدة صلاحية سيرها المحددة في رخصتها إلا بعد تجديدها طبقاً لما ورد في هذا القانون.</p></div><div class="col-md-12"><h5>مادة (14)</h5><ol><li>يتم تجديد رخصة المركبة بطلب من قبل مالكها خلال مدة ثلاثين يوماً قبل انتهاء مدة صلاحيتها.</li><li>لا يجوز تسيير المركبة إلا بعد فحصها فحصاً فنياً لدى مؤسسة مرخصة لفحص المركبات من قبل سلطة الترخيص.</li></ol></div><div class="col-md-12"><h5>مادة (15)</h5><ol><li>يكون تجديد رخصة المركبات القديمة، وكذا المركبات العمومية والحافلات التي مضى على سنة صنعها مدة عشر سنوات كل ستة أشهر.</li><li>لا يجوز تجديد رخصة المركبة القديمة إذا مضى على انتهاء صلاحية رخصة تسييرها مدة تزيد على سنة (ما عدا الدراجات النارية والمركبات الخصوصية والمركبات التجارية التي لا يزيد وزنها الإجمالي عن ستة آلاف كيلو جرام).</li></ol></div><div class="col-md-12"><h5>مادة (16)</h5><p>إذا ثبت عدم صلاحية المركبة للاستعمال أو إخراجها نهائياً من فلسطين، خلال مدة سريان رخصتها، يجوز لمالكها استرجاع الرسوم المدفوعة على الأشهر الكاملة من المدة المتبقية بنسبة 1/12 من الرسوم السنوية عن كل شهر.</p></div><div class="col-md-12 mt-4"><h5>مادة (17)</h5><p>على مالك المركبة في حالة بيعها أو إجراء أي تصرف بنقل ملكيتها للغير أن يبلغ ذلك كتابة إلى سلطة الترخيص خلال خمسة عشر يوماً من تاريخ البيع أو التصرف الناقل للملكية مبيناً اسم المالك الجديد وعنوانه، وتستمر مسئولية المالك الأصلي فيما يختص بتنفيذ أحكام هذا القانون إلى أن يتم نقل ملكيتها.</p></div><div class="col-md-12"><h5>مادة (18)</h5><ol><li>على كل شخص أصبح مالكاً لأية مركبة بأية طريقة من طرق نقل الملكية أن يتقدم بطلب إلى سلطة الترخيص المختصة لإتمام إجراءات نقل الملكية خلال مدة أقصاها ثلاثون يوماً.</li><li>إذا ثبت لسلطة الترخيص عدم وجود أي قيد يمنع نقل ملكية المركبة فيتم تحصيل رسوم نقل الملكية المقررة وإصدار رخصة باسم المالك الجديد.</li></ol></div><div class="col-md-12"><h5>مادة (19)</h5><p>إذا توفى مالك المركبة أو صدر حكم باعتباره مفقوداً، وجب على ورثته أو من يمثلهم إخطار سلطة الترخيص بذلك خلال ستين يوماً من اليوم التالي تاريخ الوفاة أو الحكم، ويتم تعيين مسئول عن المركبة من بين الورثة من قبل المحكمة المختصة، فإذا آلت المركبة إلى أحد الورثة، تنقل ملكية المركبة إلى المالك الجديد.</p></div><div class="col-md-12"><h5>مادة (20)</h5><ol><li>لا يجوز إجراء أي تغيير في أوجه استعمال المركبة أو استبدال أي جزء جوهري من أجزائها إلا بعد الحصول على موافقة سلطة الترخيص.</li><li>على مالك المركبة إخطار سلطة الترخيص خلال خمس عشر يوماً بأي تغيير يطرأ على محل إقامته أو عنوانه.</li></ol></div><div class="col-md-12"><h5>مادة (21)</h5><ol><li>يجوز سلطة الترخيص أن تخصص لوحات اختبار لمنتجي المركبات أو لمستورديها أو لتجار المركبات أو لمعهد المواصفات المرخص له بفحصها بعد استيفاء الرسوم المقررة</li><li>لا يجوز استعمال هذه اللوحات في غير الغرض التي تحدده اللائحة.</li></ol></div></div></div>');

setHTML.push('<div class="col-12 text-center my-4 containeranimate">');
setHTML.push('<div id="'+adSlotCenter+'"></div>');
setHTML.push('</div>');

setHTML.push('<div class="container containeranimate"><div class="row"><div class="col-md-12"><h4 class="text-primary"><strong>الباب الثالث</strong></h4><h4>المتانة والأمن في المركبات</h4></div><div class="col-md-12"><h5>مادة (22)</h5><p>يجب أن تكون المركبة مستوفية لشروط المتانة والأمن التي تحددها اللائحة.</p></div><div class="col-md-12"><h5>مادة (23)</h5><p>لا يجوز لمالك المركبة استعمالها أو السماح لغيره باستعمالها إذا فقدت شرطاً من شروط المتانة والأمن المحددة في اللائحة.</p></div><div class="col-md-12"><h5>مادة (24)</h5><ol><li>لا يجوز إحداث أي تغيير في قياسات المركبة أو وزنها الإجمالي المسموح به أو حمولتها الذاتية أو قوة محركها عن المقدار الذي حدده منتج المركبة إلا بموافقة سلطة الترخيص.</li><li>لا يجوز وضع أية إضافات على جسم المركبة أو هيكلها أو ملحقاتها إلا بعد موافقة سلطة الترخيص.</li></ol></div><div class="col-md-12"><h5>مادة (25)</h5><ol><li>يجوز للفاحص الذي يحمل شهادة فاحص فني مركبات من سلطة الترخيص وللشرطي المؤهل لذلك أن يقوم بفحص المركبة بمعرفته.</li><li>إذا ثبت لأي فاحص أو شرطي من المذكورين في الفقرة (1) أن المركبة غير مستوفيه لشروط المتانة والأمن تسحب المركبة لأقرب مركز مرور ويتم سحب رخصتها ولوحتي أرقامها وذلك مع عدم الإخلال بالعقوبة المقررة. ولا تعاد الرخصة إلا بعد ثبوت صلاحية المركبة للسير وتسديد الرسوم المستقحة.</li></ol></div><div class="col-md-12"><h4 class="text-primary"><strong>الباب الرابع</strong></h4><h4>رخص قيادة المركبات</h4></div><div class="col-md-12"><h5>مادة (26)</h5><ol><li>لا يجوز لأحد قيادة مركبة آلية إلا إذا كان يحمل رخصة قيادة سارية المفعول لنوع المركبة التي يقودها صدرت بمقتضى أحكام هذا القانون، وأن يقدمها لرجال الشرطة عند طلبها .</li><li>لا يجوز لمالك المركبة أو من يملك السيطرة عليها أن يسمح لشخص آخر بقيادتها إذا لم يكن يحمل رخصة قيادة طبقاً لما هو وارد بالفقرة (1) أعلاه.</li><li>لا يجوز لأحد أن يحصل على أكثر من رخصة قيادة واحدة من نفس الدرجة.</li></ol></div><div class="col-md-12"><h5>مادة (27)</h5><p>تصدر سلطة الترخيص جميع أنواع رخص القيادة، وتحدد اللائحة درجاتها وصلاحية ومدة كل منها وشروط الحصول عليها وكيفية تجديدها.</p></div><div class="col-md-12"><h5>مادة (28)</h5><p>يشترط في طالب الحصول على رخصة قيادة مركبة آلية ما يلي:</p><ol><li>أن يكون قد أتم ستة عشر سنة ميلادية عند تقديم الطلب لأول مرة وتحدد اللائحة السن المقررة لكل درجة من درجات الرخص.</li><li>أن يكون لائقاً صحياً للقيادة من حيث سلامة البنية والنظر والسمع.</li><li>أن يجتاز الاختبارات النظرية والعملية في قيادة المركبات التي تقررها سلطة الترخيص.</li></ol></div><div class="col-md-12"><h5>مادة (29)</h5><p>استثناء مما ورد في المادة (27) يتولى نادي السيارات الفلسطيني إصدار رخص القيادة الدولية المبنية في الاتفاقيات الدولية للمرور المعقودة في فينا سنة 1968، ومدتها لا تتجاوز سنة ميلادية واحدة، ويشترط في طالب الحصول عليها أن يكون حائزاً على رخصة سوق فلسطينية سارية المفعول، ولا يجوز استخدام هذه الرخص لقيادة المركبات في فلسطين.</p></div><div class="col-md-12"><h5>مادة (30)</h5><p>يسمح لحاملي رخص القيادة الدولية الصادرة عن سلطة أجنبية بقيادة مركبة داخل الأراضي الفلسطينية ما دامت رخصهم صالحة لقيادتها وفي حدود مدة صلاحيتها، على أن تكون إقامتهم في فلسطين قانونية، وشريطة المعاملة بالمثل.</p></div><div class="col-md-12"><h5>مادة (31)</h5><p>يجوز استبدال رخص القيادة الأجنبية برخص قيادة فلسطينية من ذات الدرجة شريطة المعاملة بالمثل.</p></div><div class="col-md-12"><h5>مادة (32)</h5><p>لا يجوز تعلم قيادة مركبة آلية على الطريق إلا إذا كان المتدرب قد بلغ السن المحددة في اللائحة.</p></div><div class="col-md-12"><h5>مادة (33)</h5><p>تصدر سلطة الترخيص رخص مدارس تعليم قيادة المركبات، ورخص لتعليم قيادة المركبات، ورخص الإدارة المهنية لمدرسة تعليم قيادة المركبات، وتحدد اللائحة شروط ذلك.</p></div><div class="col-md-12"><h5>مادة (34)</h5><p>يعتبر مدرب قيادة المربكات في حكم قائد المركبة، ويكون مسئولاً وحده عما يقع من المخالفات لأحكام هذا القانون.</p></div><div class="col-md-12"><h4 class="text-primary"><strong>الباب الخامس</strong></h4><h4>قواعد المرور وآدابه</h4></div><div class="col-md-12"><h4 class="text-success">الفصل الأول</h4><h4>السلوك في الطريق</h4></div><div class="col-md-12"><h5>مادة (35)</h5><p>لا يجوز لعابر الطريق التصرف بحالة تعرض حياة الأشخاص أو الأموال للخطر، أو تعيق حركة السير، أو تعرقلها.</p></div><div class="col-md-12"><h5>مادة (36)</h5><p>لا يجوز قيادة مركبة إذا كان قائدها.</p><ol><li>غير ملم بتشغيل المركبة واستعمالها.</li><li>في حالة صحية من شانها تعريض عابري الطريق للخطر.</li><li>تحت تأثير المخدرات أو المكسرات.</li><li>في حالة لا يستطيع معها السيطرة على المركبة أو رؤية الطريق وحركة السير فيها.</li></ol></div><div class="col-md-12"><h5>مادة (37)</h5><p>لا يجوز الكتابة أو الرسم أو وضع أية بيانات أخرى على جسم المركبة أو أي جزء من أجزائها غير تلك الواجبة بحكم القانون أو النظام، ولا يجوز استعمال المركبة في الإعلان بتركيب مكبر صوت عليها أو بوضع لافتات أو نماذج مجسمة إلا بموافقة سلطة الترخيص ويجوز للشرطة حجز المركبة لحين إزالة أسباب المخالفة</p></div><div class="col-md-12"><h4 class="text-success">الفصل الثاني</h4><h4>الطريق ومسالكها</h4></div><div class="col-md-12"><h5>مادة (38)</h5><p>لا يجوز قيادة مركبة إلا على طريق مخصصة لنوعها.</p></div><div class="col-md-12"><h5>مادة (39)</h5><ol><li>في الطريق المقسمة على امتدادها بواسطة مساحة فاصلة تعتبر كل طريق من جانبي المساحة الفاصلة طريقاً ذات اتجاه واحد، وعلى قائد المركبة أو سائق العربة التي يجرها حيوان أن يستعمل الجانب الأيمن من المساحة الفاصلة وألا يجتازها أو بوقف المركبة أو العربة عليها إلا إذا سمحت شاخصة بذلك.</li><li>في الطريق المقسمة بواسطة خط فاصل متصل على قائد المركبة أن يستعمل الجانب الأيمن ولا يجتازه إلا إذا كان هناك خط متقطع على اليمين من الخط المتصل.</li></ol></div><div class="col-md-12"><h5>مادة (40)</h5><p>إذا كانت الطريق مقسمة إلى مسالك ومرسوماً عليها اسمها تحدد مسلك السير إلى اليمين أو الأمام أو اليسار فلا يجوز لقائد المركبة الدخول إلى المفترق أو السير فيه إلا من المسلك المرسوم المحدد لاتجاه سيره .</p></div><div class="col-md-12"><h5>مادة (41)</h5><p>في الطريق ذات الاتجاه الواحد لا يجوز لأحد قيادة مركبة في أي مقطع منها بالاتجاه المعاكس للاتجاه المسموح به في تلك الطريق، ولا يجوز لأحد قيادة مركبة أو حيوان على الرصيف إلا من أجل عبوره للدخول إلى فناء أو كراج أو الخروج منه.</p></div><div class="col-md-12"><h4 class="text-success">الفصل الثالث</h4><h4>التحول والاستدارة والسير للخلف</h4></div><div class="col-md-12"><h5>مادة (42)</h5><p>لا يجوز لقائد المركبة أن يتحول عن مسلك سيره أو يستدير للسير في الاتجاه المعاكس أو يسير بها إلى الخلف إلا إذا كانت حالة الطريق تسمح بذلك.</p></div><div class="col-md-12"><h5>مادة (43)</h5><p>لا يجوز لقائد المركبة الاستدارة إلى اليمين أو اليسار إلا إذا كانت استدارته من الطريق الخارج منها والدخول بالطريق المتجه إليها لا تعيق حركة السير للمركبات القادمة من أي اتجاه آخر.</p></div><div class="col-md-12"><h4 class="text-success">الفصل الرابع</h4><h4>الالتقاء والتجاوز والمسافة بين المركبات</h4></div><div class="col-md-12"><h5>مادة (44)</h5><p>إذا تقابلت مركبتان من اتجاهين متعاكسين في طريق لا يكفي عرضها لمرورهما فعلى قائدي المركبتين تخفيف سرعتهما والاتجاه بمركبتيها نحو الحافة اليمنى للطريق أو تخطي الحافة لضمان تفادي اصطدام المركبتين، وفي الطريق الصاعد على قائد المركبة النازلة إعطاء حق الأولوية للمركبة الصاعدة.</p></div><div class="col-md-12"><h5>مادة (45)</h5><p>لا يجوز لقائد المركبة تجاوز مركبة أخرى أو حيوان او محاولة تجاوزها إلا إذا كانت الطريق خالية بمسافة تكفي لتمكينه من التجاوز ومواصلة السير بأمان دون إعاقة لحركة السير.</p></div><div class="col-md-12"><h5>مادة (46)</h5><p>لا يجوز لقائد المركبة تجاوز مركبة أخرى إلا من جانبها الأيسر ويسمح بالتجاوز من جانب الأيمن في الحالات التالية:</p><ol><li>إذا كان قائد المركبة الأمامية ينوي الاستدارة إلى اليسار وأعطى إشارة بذلك.</li><li>إذا كانت الطريق ذات اتجاه واحد وفيها أكثر من مسلكين.</li><li>إذا كانت هنالك أسهم على الطريق تسمح بذلك.</li></ol></div><div class="col-md-12"><h5>مادة (47)</h5><p>على قائد المركبة المتجاوز عنها أن يتجه بمركبته إلى حافة الطريق قدر الإمكان لتمكين المركبة التي تتجاوز من إكمال تجاوزها بأمان وأن لا يزيد في سرعة سيره إلا بعد مرور المركبة المتجاوزة.</p></div><div class="col-md-12"><h5>مادة (48)</h5><p>على قائد المركبة أن يترك بينه وبين المركبة التي تسير أمامه مسافة كافية لتمكينه من إيقاف مركبته عند الضرورة وتمكين المركبة الآتية من خلفه وتسير بسرعة تزيد على سرعته من الدخول في تلك المسافة دون مضايقة.</p></div><div class="col-md-12"><h4 class="text-success">الفصل الخامس</h4><h4>السرعة</h4></div><div class="col-md-12"><h5>مادة (49)</h5><p>على قائد المركبة قيادة المركبة بسرعة تتفق وظروف الطريق، وتحدد اللائحة الحالات التي يتوجب على سائق المركبة تخفيف سرعته فيها.</p></div><div class="col-md-12"><h5>مادة (50)</h5><ol><li>يكون الحد الأقصى لسرعة سير المركبات في الطرق داخل المدن أو خارجها أو في الطريق السريعة طبقاً لما هو مبين في اللائحة.</li><li>إذا وضعت شاخصة على الطريق تحدد الحد الأقصى لسرعة السير فلا يجوز لقائد المركبة تجاوز هذه السرعة وحتى الوصول إلى الشاخصة التي تلغيها أو المفترق القريب.</li></ol></div><div class="col-md-12"><h3 class="text-success">الفصل السادس</h3><h4>حق الألوية في المرور</h4></div><div class="col-md-12"><h5>مادة (51)</h5><p>إذا لم توضع شاخصة تشير إلى إعطاء حق الأولوية في حالة دخول المفترق أو التوقف قبل المفترق، فعلى قائد المركبة أن يعطي حق الأولوية للمركبات القادمة من على يمين اتجاه سيره، وإذا كانت وجهته الاتجاه إلى اليسار، فعليه أن يعطي حق الأولوية للمركبة القادمة من الجهة المقابلة أو المركبات التي وصلت المفترق.</p></div><div class="col-md-12"><h5>مادة (52)</h5><p>على قائد المركبة إعطاء حق الأولوية للمشاة والمركبات في الحالات التالية:</p><ol><li>وجود شاخصة تشير إلى وجوب التوقف.</li><li>وجود شاخصة تشير إلى إعطاء حق الأولوية.</li><li>الخروج من طريق ترابية والدخول إلى طريق معبدة.</li><li>الخروج من فناء مبنى أو محطة وقود أو كراج خدمة.</li><li>انسداد مسلك السير في طريق ذات اتجاهين.</li><li>المركبات داخل الميدان.</li></ol></div></div></div>');
setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');
var htmlset = setHTML.join('');
document.title = "قانون المرور";
$('#container').html(htmlset);
setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom);
scrollGoTo($('#container'))

}



var TotalExams = 0;
var Allcorrect_answers = 0;
var uset_quiz_length = 0;
var averagemarks = 0;
var averagemarksNum = 0;

function userProfilePage(){
var logoSite = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMsIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2Y4ZjlmYTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zLCAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIHN0cm9rZTogdXJsKCNsaW5lYXItZ3JhZGllbnQtMik7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiB1cmwoI2xpbmVhci1ncmFkaWVudC0zKTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjI0OS41IiB5MT0iNDk5IiB4Mj0iMjQ5LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWMyMTI2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxMzAzZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIxNTQuNjAzIiB5MT0iMzUyLjI4MSIgeDI9IjM0NC43MDkiIHkyPSI3MC40MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjI4IiBzdG9wLW9wYWNpdHk9IjAuNiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzIiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTMiIHgxPSIyMjMuNDI3IiB5MT0iNDI4LjU2MiIgeDI9IjI3Ni40MTciIHkyPSIzNTAiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtMiIvPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIGN4PSIyNTAiIGN5PSIyMDEiIHI9IjEwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYzM1NDUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGMzNTQ1Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8Zz4KICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjI0OS41IiBjeT0iMjQ5LjUiIHJ4PSIyNTAuNSIgcnk9IjI0OS41Ii8+CiAgICA8cGF0aCBpZD0iRWxsaXBzZV8xX2NvcHlfNSIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA1IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yNDkuNjUxLDcwLjQ0MUExNzkuMjMyLDE3OS4yMzIsMCwwLDEsMzk3LjI3MiwzNTEuMjg4QzM3MS4yLDMxNC44MzYsMjUxLDE4NCwyNTEsMTg0UzExOS4zOSwzMjkuMzg0LDEwMi43MjIsMzUyLjI4NUExNzkuMjMxLDE3OS4yMzEsMCwwLDEsMjQ5LjY1MSw3MC40NDFaIi8+CiAgICA8cGF0aCBpZD0iRWxsaXBzZV8xX2NvcHlfOCIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA4IiBjbGFzcz0iY2xzLTMiIGQ9Ik0yNDkuNjUxLDQyOC41NTlBMTc4LjcwNiwxNzguNzA2LDAsMCwwLDM3OS45MjksMzcyLjQxQzM3OS44NTMsMzcyLjQzOCwzNjIsMzUwLDM2MiwzNTBzLTQwLjM2NSw1Mi0xMTIsNTItMTEyLTUwLTExMi01MC0xOC4xNTEsMjAuOS0xOC4wODMsMjAuOTg0QTE3OC43LDE3OC43LDAsMCwwLDI0OS42NTEsNDI4LjU1OVoiLz4KICAgIDxwYXRoIGlkPSJFbGxpcHNlXzNfY29weSIgZGF0YS1uYW1lPSJFbGxpcHNlIDMgY29weSIgY2xhc3M9ImNscy00IiBkPSJNMjUwLDk5YzgzLjk0NywwLDE1Miw2Ny44MjksMTUyLDE1MS41YTE4NS45NjEsMTg1Ljk2MSwwLDAsMS04LDUyLjVMMjUxLDE0MywxMDgsMzAzcy0xMC0yNC4wNjMtMTAtNTIuNUM5OCwxNjYuODI5LDE2Ni4wNTMsOTksMjUwLDk5WiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZV9jb3B5IiBkYXRhLW5hbWU9ImxpbmUgY29weSI+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzFfY29weV8zIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxIGNvcHkgMyIgY2xhc3M9ImNscy01IiBkPSJNMjQ4LjA0NywyMzYuMTYzaDUuMjA4djIzLjM5NGgtNS4yMDhWMjM2LjE2M1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTI0OS4zNDksMjA4LjkwNmgyLjZ2MTQuMjhoLTIuNnYtMTQuMjhaIi8+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzFfY29weSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSBjb3B5IiBjbGFzcz0iY2xzLTUiIGQ9Ik0yNDYuNzQ1LDI3Ny43NDNoNy44MTJWMzAzLjdoLTcuODEyVjI3Ny43NDNaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yMzEuMTYzLDMzMC45NTVoMTQuMjh2MzguOTc2aC0xNC4yOFYzMzAuOTU1WiIvPgogICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8zX2NvcHkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMgY29weSIgY2xhc3M9ImNscy01IiBkPSJNMjU1Ljg1OSwzMzAuOTU1aDE0LjI4djM4Ljk3NmgtMTQuMjhWMzMwLjk1NVoiLz4KICA8L2c+Cjwvc3ZnPgo=";
var setHTML = [''];


setHTML.push('<div class="col-12 text-center my-2 containeranimate">');

var FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,manager,model;
 TotalExams = 0;
 Allcorrect_answers = 0;
 uset_quiz_length = 0;
 averagemarks = 0;
 averagemarksNum = 0;





 UserId = localStorage.getItem("Id");
if(UserId.length != "" && UserId != null && UserId != undefined){
 FirstName = localStorage.getItem("FirstName");
 LastName = localStorage.getItem("LastName");
 FullName = localStorage.getItem("FullName");
 Email = localStorage.getItem("Email");
 UserId = localStorage.getItem("Id");
 MiddleName = localStorage.getItem("MiddleName");
 profilePic = localStorage.getItem("profilePic");
 profilePic64 = localStorage.getItem("profilePic64");
 loginWith = localStorage.getItem("loginWith");
 manager = localStorage.getItem("manager");
 model = localStorage.getItem("model");

if(manager != "fasle"){
if(manager == "true"|| manager == true){
FullName = FullName +'<i class="fa-solid fa-badge-check text-primary mx-1"></i>';
}
}

 setHTML.push('<div id="MyProfile" class="m-auto mb-2"><div class="card-header"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 align-items-center text-center">');
  setHTML.push('<div class="col"><a href="javascript:;" class="avatar rounded-circle"><img alt="Image" id="profilePic" src="'+logoSite+'" width="160" height="160" class="rounded-circle"></a></div>');
  setHTML.push('<div class="col"> <small href="#!" class="d-block h6 mb-0 mt-1" id="FullName"></small> <small dir="ltr" class="d-block text-muted mt-1" id="MiddleName"></small> </div>');
  setHTML.push('<div class="col"> <small class="d-block text-muted mt-1" id="login_With"></small> <small class="d-block text-muted mt-1" id="loginWith"></small> </div>');
  setHTML.push('</div></div>');
  setHTML.push('<div class="card card-fluid"><div class="card-header text-center">');
  setHTML.push('<h4>إعدادات مشاركة الإختبارات</h4>');
  setHTML.push('</div>');
  setHTML.push('<div class="card-body">');
  setHTML.push('<div>عندما تقوم بمشاركة نتيجة أحد إختبارتك مع أصدقائك، سيرى في الملاحظات <br/><span class="fst-italic">تم إجراء هذا الإختبار بواسطة <span class="fw-bold" id="UserShareName">إسمك</span></span></div>');
  setHTML.push('<div class="my-2">يمكنك تعديل الإسم أو اللقب أدناه.</div>');
  setHTML.push('<div class="input-group my-3"> <label class="input-group-text"  for="inputUserShareName">الإسم الحالي</label> <input type="text" class="form-control" id="inputUserShareName" placeholder="الإسم أو اللقب..." aria-label="Username" aria-describedby="inputUserShareName"> </div>');
  setHTML.push('<div class="form-check my-2 form-switch '+formswitchlg+'"> <input class="form-check-input form-check-default" type="checkbox" role="switch" id="checkedUserShareName" onchange="checkedUser()" checked><span><label class="form-check-label" for="checkedUserShareName">مشاركة الإسم</label></span></div>');
  setHTML.push('<div class="alert alert-primary fst-italic d-none" role="alert" id="checkedUsernote"> ملاحظة: عند إيقاف خاصية مشاركة الإسم سيظهر في الملاحظات بواسطة مجهول </div>');
  setHTML.push('<div class="alert alert-warning d-none" role="alert" id="checkedUserAlert"> </div>');
  setHTML.push('<div class="text-center"> <button type="button" onclick="saveMySetting()" class="btn btn-default shadow-none splash-default ripple my-2" id="btnsaveMySetting">حفــظ</button> </div>');
  setHTML.push('</div><div></div></div>');
  setHTML.push('<div class="card card-fluid">');
  setHTML.push('<div class="card-header text-center"> <h4>إختباراتك المخزنة في خوادمنا</h4> </div>');
  setHTML.push('<div class="card-body"> <div id="table_quiz_saver"> <div class="row"> <div class="col col-sm-6 col-md-3 text-center my-2"> <span class="h5 mb-0" id="TotalExams"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></span> <span class="d-block text-sm">مجموع الإختبارات</span> </div> <div class="col col-sm-6 col-md-3 text-center my-2"> <span class="h5 mb-0" id="SuccessfulExams"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></span> <span class="d-block text-sm">الناجح منها</span> </div> <div class="col col-sm-6 col-md-3 text-center my-2"> <span class="h5 mb-0" id="Successfulpercent"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></span> <span class="d-block text-sm">نسبة النجاح</span> </div> <div class="col col-sm-6 col-md-3 text-center my-2"> <span class="h5 mb-0" id="averageMarks"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></span> <span class="d-block text-sm">متوسط العلامات</span> </div></div>');

  setHTML.push('<div id="tablequiz">');
  setHTML.push('<div class="table-responsive">');
 setHTML.push('<div class="table-wrapper px-1 pb-0">');
 setHTML.push('<div class="table-title bg-default">');

 setHTML.push('<div class="row">');
 setHTML.push('<div class="col col-md-7">');
 setHTML.push('<div class="titletable"><i class="fa-solid fa-folder-user" style=""></i> <b>سجل </b>إختبارتك على الخادم</div>');
 setHTML.push('</div>');




 setHTML.push('</div>');
 setHTML.push('</div>');
 setHTML.push('<table class="table table-striped table-hover">');

 setHTML.push('<thead><tr>');
 setHTML.push('<th>#</th>');
 setHTML.push('<th class="t_type">تؤوريا</th>');
 setHTML.push('<th class="t_idQuiz">رقم الإمتحان</th>');
 setHTML.push('<th class="t_date">التاريخ</th>');
 setHTML.push('<th class="t_duration">المدة</th>');
 setHTML.push('<th class="t_mark"><span>العلامة</span></th>');
 setHTML.push('<th class="t_result"><span>النتيجة</span></th>');
 setHTML.push('<th>إجرائات</th>');
 setHTML.push('</tr></thead>');

 setHTML.push('<tbody id="tableSetAll">');










 setHTML.push('</tbody>');
 setHTML.push('</table>');





 setHTML.push('</div></div>');
  setHTML.push('</div>');

  setHTML.push('</div> <div id="table_noquiz" class=" d-none"> <div class="alert alert-light d-flex align-items-center rounded-0 rounded-bottom" role="alert"><i class="fas fa-rss mx-2 fs-4"></i><span>ملاحظة</span></div> </div> </div>');
  setHTML.push('</div></div>');


  setHTML.push('<button type="button" class="btn btn-outline-danger" onclick="logoutUsers()">تسجيـل خـروج</button>');


}else{
 setHTML.push("يجب تسجيل الدخول للمتابعة");
}






setHTML.push('</div>');



var htmlset = setHTML.join('');
document.title = "الملف الشخصي";
$('#container').html(htmlset);






if(profilePic64){
$("#profilePic").attr('src',profilePic64);
}else{
$("#profilePic").attr('src',profilePic);
}
if(FullName){
$("#FullName").html(FullName);
}
if(MiddleName){
$("#MiddleName").html(MiddleName);
}
if(loginWith){
$("#login_With").html("دخول عبر");
$("#loginWith").html(loginWith);
}


startGetQuiz(FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,manager,model)




scrollGoTo($('#container'))

}

function managerPage(){
var logoSite = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMsIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2Y4ZjlmYTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zLCAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIHN0cm9rZTogdXJsKCNsaW5lYXItZ3JhZGllbnQtMik7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiB1cmwoI2xpbmVhci1ncmFkaWVudC0zKTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjI0OS41IiB5MT0iNDk5IiB4Mj0iMjQ5LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWMyMTI2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxMzAzZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIxNTQuNjAzIiB5MT0iMzUyLjI4MSIgeDI9IjM0NC43MDkiIHkyPSI3MC40MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjI4IiBzdG9wLW9wYWNpdHk9IjAuNiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzIiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTMiIHgxPSIyMjMuNDI3IiB5MT0iNDI4LjU2MiIgeDI9IjI3Ni40MTciIHkyPSIzNTAiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtMiIvPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIGN4PSIyNTAiIGN5PSIyMDEiIHI9IjEwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYzM1NDUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGMzNTQ1Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8Zz4KICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjI0OS41IiBjeT0iMjQ5LjUiIHJ4PSIyNTAuNSIgcnk9IjI0OS41Ii8+CiAgICA8cGF0aCBpZD0iRWxsaXBzZV8xX2NvcHlfNSIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA1IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yNDkuNjUxLDcwLjQ0MUExNzkuMjMyLDE3OS4yMzIsMCwwLDEsMzk3LjI3MiwzNTEuMjg4QzM3MS4yLDMxNC44MzYsMjUxLDE4NCwyNTEsMTg0UzExOS4zOSwzMjkuMzg0LDEwMi43MjIsMzUyLjI4NUExNzkuMjMxLDE3OS4yMzEsMCwwLDEsMjQ5LjY1MSw3MC40NDFaIi8+CiAgICA8cGF0aCBpZD0iRWxsaXBzZV8xX2NvcHlfOCIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA4IiBjbGFzcz0iY2xzLTMiIGQ9Ik0yNDkuNjUxLDQyOC41NTlBMTc4LjcwNiwxNzguNzA2LDAsMCwwLDM3OS45MjksMzcyLjQxQzM3OS44NTMsMzcyLjQzOCwzNjIsMzUwLDM2MiwzNTBzLTQwLjM2NSw1Mi0xMTIsNTItMTEyLTUwLTExMi01MC0xOC4xNTEsMjAuOS0xOC4wODMsMjAuOTg0QTE3OC43LDE3OC43LDAsMCwwLDI0OS42NTEsNDI4LjU1OVoiLz4KICAgIDxwYXRoIGlkPSJFbGxpcHNlXzNfY29weSIgZGF0YS1uYW1lPSJFbGxpcHNlIDMgY29weSIgY2xhc3M9ImNscy00IiBkPSJNMjUwLDk5YzgzLjk0NywwLDE1Miw2Ny44MjksMTUyLDE1MS41YTE4NS45NjEsMTg1Ljk2MSwwLDAsMS04LDUyLjVMMjUxLDE0MywxMDgsMzAzcy0xMC0yNC4wNjMtMTAtNTIuNUM5OCwxNjYuODI5LDE2Ni4wNTMsOTksMjUwLDk5WiIvPgogIDwvZz4KICA8ZyBpZD0ibGluZV9jb3B5IiBkYXRhLW5hbWU9ImxpbmUgY29weSI+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzFfY29weV8zIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxIGNvcHkgMyIgY2xhc3M9ImNscy01IiBkPSJNMjQ4LjA0NywyMzYuMTYzaDUuMjA4djIzLjM5NGgtNS4yMDhWMjM2LjE2M1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTI0OS4zNDksMjA4LjkwNmgyLjZ2MTQuMjhoLTIuNnYtMTQuMjhaIi8+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzFfY29weSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSBjb3B5IiBjbGFzcz0iY2xzLTUiIGQ9Ik0yNDYuNzQ1LDI3Ny43NDNoNy44MTJWMzAzLjdoLTcuODEyVjI3Ny43NDNaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yMzEuMTYzLDMzMC45NTVoMTQuMjh2MzguOTc2aC0xNC4yOFYzMzAuOTU1WiIvPgogICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8zX2NvcHkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMgY29weSIgY2xhc3M9ImNscy01IiBkPSJNMjU1Ljg1OSwzMzAuOTU1aDE0LjI4djM4Ljk3NmgtMTQuMjhWMzMwLjk1NVoiLz4KICA8L2c+Cjwvc3ZnPgo=";
var setHTML = [''];
setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('إدارة المحتوى');
setHTML.push('</div>');

var htmlset = setHTML.join('');
document.title = "إدارة المحتوى";
$('#container').html(htmlset);
scrollGoTo($('#container'))
}

//set quiz page
function programPDF(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');


setHTML.push('<div class="col-12 text-center containeranimate">');
setHTML.push('<object data="css/program.pdf" type="application/pdf" width="100%" height="100%" internalinstanceid="19"></object>');
setHTML.push('</div>');

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');


var htmlset = setHTML.join('');
document.title = "منهاج التؤوريا";
$('#container').html(htmlset);


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)


}

//set quiz page
function privacyPage(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');

setHTML.push('<div class="container containeranimate"><div class="row"><div class="col-md-12">');


setHTML.push('<div class="col-md-12 text-center my-3">');
setHTML.push('<h3>سياسات الخصوصية</h3>');
setHTML.push('</div>');



setHTML.push('<h4>الخصوصية وبيان سريّة المعلومات </h4><p>نقدر مخاوفكم واهتمامكم بشأن خصوصية بياناتكم على شبكة الإنترنت.لقد تم إعداد هذه السياسة لمساعدتكم في تفهم طبيعة البيانات التي نقوم بجمعها منكم عند زيارتكملموقعنا على شبكة الانترنت وكيفية تعاملنا مع هذه البيانات الشخصية.</p><h4>التصفح </h4><p>لم نقم بتصميم هذا الموقع من أجل تجميع بياناتك الشخصية من جهاز الكمبيوتر الخاص بك أثناء تصفحكلهذا الموقع، وإنما سيتم فقط استخدام البيانات المقدمة من قبلك بمعرفتك ومحض إرادتك.</p><h4> عنوان بروتوكول شبكة الإنترنت (IP) </h4><p>في أي وقت تزور فيه اي موقع انترنت بما فيها هذا الموقع ، سيقوم السيرفر المضيف بتسجيل عنوانبروتوكول شبكة الإنترنت (IP) الخاص بك ، تاريخ ووقت الزيارة ونوع متصفح الإنترنت الذي تستخدمهوالعنوان URL الخاص بأي موقع من مواقع الإنترنت التي تقوم بإحالتك إلى الى هذا الموقع على الشبكة.</p><h4>ملفات الدخول</h4><p>مثل العديد من مواقع ويب أخرى، عالم جوجل يجعل استخدام ملفات السجل. المعلومات داخل ملفات الدخول يشمل بروتوكول (IP ) عناوين الإنترنت ، نوع المتصفح ، مزود خدمة الانترنت ( ISP) ، طابع التاريخ / الوقت ، في اشارة / الخروج الصفحات، و عدد النقرات ل تحليل الاتجاهات وإدارة حركة الموقع، تعقب المستخدم \'ق حول الموقع، وجمع المعلومات الديموغرافية . لا ترتبط عناوين بروتوكول الإنترنت، وغيرها من مثل هذه المعلومات ل أية معلومات هو ان تحدد هويتك .</p><h4>بيانات النشاط</h4><p>عند استخدام التطبيق او موقعنا الإلكتروني، ستقوم بإرسال المعلومات والمحتوى إلى ملف التعريف الخاص بك. سننشئ أيضًا بيانات حول استخدامك لخدماتنا بما في ذلك مشاركتك في الأنشطة على الخدمة، أو إرسالك للرسائل. نقوم أيضًا بجمع البيانات الفنية حول كيفية تفاعلك مع خدماتنا.</p><p>نحن نستعين بخدمات من طرف ثالث مثل خدمة Google Analytics. توفر لنا هذا الخدمة جمع بعض البيانات وجلسات إعادة التشغيل لنشاطك على الموقع وتحلل بيانات الإستخدام الخاصة بك لمساعدتنا على تحسين تجربتك.</p><h4> عمليات المسح على الشبكة </h4><p>إن عمليات المسح التي نقوم بها مباشرة على الشبكة تمكننا من تجميع بيانات محددة مثل البياناتالمطلوبة منك بخصوص نظرتك وشعورك تجاه موقعنا.تعتبر ردودك ذات أهمية قصوى ، ومحل تقديرنا حيث أنهاتمكننا من تحسين مستوى موقعنا، ولك كامل الحرية والإختيار في تقديم البيانات المتعلقة بإسمكوالبيانات الأخرى.</p><h4> الروابط بالمواقع الأخرى على شبكة الإنترنت </h4><p>قد يشتمل موقعنا على روابط لمواقع أخرى على شبكة الإنترنت. او علانات من مواقع اخرى مثل GoogleAdSense ولا نعتبر مسؤولين عن أساليب تجميع البيانات من قبل تلك المواقع، يمكنك الاطلاع على سياساتالسرية والمحتويات الخاصة بتلك المواقع التي يتم الدخول إليها من خلال أي رابط ضمن هذا الموقع.نحن قد نستعين بشركات إعلان لأطراف ثالثة لعرض الإعلانات عندما تزور موقعنا على الويب. يحق لهذهالشركات أن تستخدم معلومات حول زياراتك لهذا الموقع ولمواقع الويب الأخرى (باستثناء الاسم أوالعنوان أو عنوان البريد الإلكتروني أو رقم الهاتف)، وذلك من أجل تقديم إعلانات حول البضائعوالخدمات التي تهمك. إذا كنت ترغب في مزيد من المعلومات حول هذا الأمر وكذلك إذا كنت تريد معرفةالاختيارات المتاحة لك لمنع استخدام هذه المعلومات من قِبل هذه الشركات ، <a href="https://www.google.com/privacy_ads.html" target="_blank">فالرجاء النقر هنا.</a>.</p><h4> إفشاء المعلومات </h4><p>سنحافظ في كافة الأوقات على خصوصية وسرية كافة البيانات الشخصية التي نتحصل عليها. ولن يتم إفشاءهذه المعلومات إلا إذا كان ذلك مطلوباً بموجب أي قانون أو عندما نعتقد بحسن نية أن مثل هذا الإجراءسيكون مطلوباً أو مرغوباً فيه للتماشي مع القانون ، أو للدفاع عن أو حماية حقوق الملكية الخاصة بهذاالموقع أو الجهات المستفيدة منه.</p><h4> البيانات اللازمة لتنفيذ المعاملات المطلوبة من قبلك </h4><p>عندما نحتاج إلى أية بيانات خاصة بك ، فإننا سنطلب منك تقديمها بمحض إرادتك. حيث ستساعدنا هذهالمعلومات في الاتصال بك وتنفيذ طلباتك حيثما كان ذلك ممكنناً. لن يتم اطلاقاً بيع البيانات المقدمةمن قبلك إلى أي طرف ثالث بغرض تسويقها لمصلحته الخاصة دون الحصول على موافقتك المسبقة والمكتوبة مالم يتم ذلك على أساس أنها ضمن بيانات جماعية تستخدم للأغراض الإحصائية والأبحاث دون اشتمالها علىأية بيانات من الممكن استخدامها للتعريف بك.</p><h4> عند الاتصال بنا </h4><p>سيتم التعامل مع كافة البيانات المقدمة من قبلك على أساس أنها سرية . تتطلب النماذج التي يتمتقديمها مباشرة على الشبكة تقديم البيانات التي ستساعدنا في تحسين موقعنا. سيتم إستخدام البياناتالتي يتم تقديمها من قبلك في الرد على كافة استفساراتك ، ملاحظاتك ، أو طلباتك من قبل هذا الموقع أوأيا من المواقع التابعة له .</p><h4> إفشاء المعلومات لأي طرف ثالث </h4><p>لن نقوم ببيع ، المتاجرة ، تأجير ، أو إفشاء أية معلومات لمصلحة أي طرف ثالث خارج هذا الموقع، أوالمواقع التابعة له.وسيتم الكشف عن المعلومات فقط في حالة صدور أمر بذلك من قبل أي سلطة قضائية أوتنظيمية.</p><h4> التعديلات على سياسة سرية وخصوصية المعلومات </h4><p>نحتفظ بالحق في تعديل بنود وشروط سياسة سرية وخصوصية المعلومات إن لزم الأمر ومتى كان ذلك ملائماً.سيتم تنفيذ التعديلات هنا او على صفحة سياسة الخصوصية الرئيسية وسيتم بصفة مستمرة إخطارك بالبياناتالتي حصلنا عليها ، وكيف سنستخدمها والجهة التي سنقوم بتزويدها بهذه البيانات.</p><h4> حذف بياناتك</h4><p>لاي سبب كان، اذا أردت ان تحذف بياناتك من خوادم موقعنا، الرجاء أرسال رسالة على البريد الالكتروني التالي: <a href="mailto:delete.account@pmix.net?subject=حذف حسابي من شبكة PalMix">delete.account@pmix.net</a></p><h4> الاتصال بنا </h4><p>يمكنكم الاتصال بنا عند الحاجة من خلال الضغط على رابط اتصل بنا المتوفر في روابط موقعنا او التواصل معنا عبر البريد الإلكتروني <a href="mailto:info@pmix.net">info@pmix.net</a></p><h4> اخيرا </h4><p>إن مخاوفك واهتمامك بشأن سرية وخصوصية البيانات تعتبر مسألة في غاية الأهمية بالنسبة لنا. نحن نأملأن يتم تحقيق ذلك من خلال هذه السياسة.</p>');
setHTML.push('</div>');
setHTML.push('</div>');
setHTML.push('</div>');

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');


var htmlset = setHTML.join('');
document.title = "سياسة الخصوصية";
$('#container').html(htmlset);


//setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)


}

//set quiz page
function setTypePage(type,adSlotTop,adSlotCenter,adSlotBottom){
var htmls = [''];
var setHTML = [''];

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');


   	$.getJSON("file/all.json", {
		alt: "json"
	}).catch(function(error) {
		console.log("error", error)
	}).done(function(data) {
    var all = data.result;

var title = "";
var text_t= "تؤوريا ";
var c = "info";
var o = "15";
var l = "";
var ic = "";


var typeAr,ic;
if(type == "private"){
typeAr = "خصوصي";
ic = 'fa-solid fa-car-side';
c = "info";
o = "15";
}else if(type == "truck"){
typeAr = 'شحن خفيف';
ic = 'fa-solid fa-truck';
c = "primary";
o = "10";
}else if(type == "haulage"){
typeAr = "شحن ثقيل"
ic = 'fa-solid fa-truck-container-empty';
c = "purple";
o = "10";
}else if(type == "taxi"){
typeAr = "عمومي"
ic = 'fa-solid fa-taxi-bus';
c = "warning";
o = "10";
}else if(type == "tractor"){
typeAr = "تراكتور"
ic = 'fa-solid fa-tractor';
c = "success";
o = "10";
}else if(type == "motorcycle"){
typeAr = "دراجة نارية"
ic = 'fa-solid fa-motorcycle';
c = "orange";
o = "15";
}else{
typeAr = type;
ic = 'fa-solid fa-messages-question';
}
    for(var i=0;i<all.length;i++){
    var n = 0;
    if(all[i].name == type){

    n = all[i].number;
    var numOwl = 1;
htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row mb-4">');
htmls.push('<div class="col-lg-8 mx-auto text-center">');
htmls.push('<h2 class="fs-1">قائمة الإمتحانات ('+typeAr+')</h2>');
htmls.push('<p class="mb-0">نماذج اسئلة التؤوريا الواردة في دائرة السير</p>');
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<hr/>');
htmls.push('<div class="row g-4">');




var _ans = 0;
var _num1 = 1;
var _num2 = 1;
var _type = type;
var page = type;


for(var s=0;s<n;s++){
title = "إمتحان (" + (s+1) + ")";
text_t = "إمتحان " + typeAr +" (" + (s+1) + ")";

if(i == 0){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}else if(i == 1){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}else if(i == 2){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}else if(i == 3){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}else if(i == 4){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}else if(i == 5){
l = "startsetHtml(\'"+type+"\',"+(s+1)+",1,0)";
}
page = 'ExamPage';
_type = type;
_num1 = (s+1);
_num2 = 1;
_ans = 0;


sethtmlsqhome(htmls,title,text_t,c,o,l,ic,page,_type,_num1,_num2,_ans);


if((s+1) == 12){
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<div class="col-12 text-center my-2 containeranimate">');
htmls.push('<div id="'+adSlotCenter+'"></div>');
htmls.push('</div>');
htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row g-4">');
}









        }









htmls.push('</div>');
htmls.push('</div>');






















    }
    }
setHTML.push(htmls.join(''));

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');

var htmlset = setHTML.join('');
document.title = "نماذج الأسئلة ("+typeAr+")";
$('#container').html(htmlset);


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)
    });
















}

//set quiz page
function contactUsPage(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
//setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');


setHTML.push('<div class="row text-center containeranimate py-5">');
setHTML.push('<div class="col-md-12 mb-3 containeranimate">');
setHTML.push('البريد الإلكتروني: ');
setHTML.push('<a href="mailto:info@pmix.net">info@pmix.net</a>');
setHTML.push('</div>');
setHTML.push('<div class="col-md-12 mb-3 containeranimate">');
setHTML.push('جوال: ');
setHTML.push('<a href="tel:0599998702">0599998702</a>');
setHTML.push('</div>');
setHTML.push('</div>');




setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
//setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');


var htmlset = setHTML.join('');
document.title = "إتصل بنا";
$('#container').html(htmlset);


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)


}

//set User quiz page
function tableUserquiz(adSlotTop,adSlotCenter,adSlotBottom){
var setHTML = [''];

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotTop+'"></div>');
setHTML.push('</div>');


setHTML.push('<div id="tablequiz" class="container-lg px-0 mt-3 containeranimate"> ');
setHTML.push('</div>');

setHTML.push('<div class="col-12 text-center my-2 containeranimate">');
setHTML.push('<div id="'+adSlotBottom+'"></div>');
setHTML.push('</div>');


var htmlset = setHTML.join('');
document.title = "إختباراتي المحفوظة";
$('#container').html(htmlset);


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)
getdata(9);

}

function signalsHtml(adSlotTop,adSlotCenter,adSlotBottom){

   	$.getJSON("file/file.json", {
		alt: "json"
	}).catch(function(error) {
		console.log("error", error)
	}).done(function(data) {

var htmls = [''];
var items = ['<div class="accordion containeranimate" id="items">'];


var itemsLink = [''];








itemsLink.push('<div class="container boxbtnlink containeranimate">');
itemsLink.push('<div class="row mb-4">');
itemsLink.push('<div class="col-lg-8 mx-auto text-center">');
itemsLink.push('<h2 class="fs-1">دراسة الشاخصات (الإشارات)</h2>');
itemsLink.push('<p class="mb-0">تعرف على الشاخصات المكونة من 6 مجموعات</p>');
itemsLink.push('</div>');
itemsLink.push('</div>');
itemsLink.push('<div class="row g-4">');



var text_t= "";
var title = "";
var d = "";
var c = "info";
var o = "10";
var l = "";
var num = "";





	for(var i =0;i < data.result.length; i++){
		var getid = data.result[i].id;
		var descriptionId = data.result[i].description;
        var itemslengtht = data.result[i].item.length;
        var descriptiontext = data.result[i].description;

if(getid == "A"){
descriptiontext = "إشارات التحذير";
}else if(getid == "B"){
descriptiontext = "إشارات الإرشاد";
}else if(getid == "C"){
descriptiontext = "إشارات الإستعلامات";
}else if(getid == "D"){
descriptiontext = "الرسومات على الطرق";
}else if(getid == "E"){
descriptiontext = "الآلات الضوئية";
}else if(getid == "F"){
descriptiontext = "الإشارات المساعدة";
}


title = descriptiontext;
d = descriptionId;
c = "info";
o = "10";
l = getid;
num = itemslengtht;


if(getid == "A"){
c = "orange";
        }else if(getid == "B"){
c = "warning";
        }else if(getid == "C"){
c = "success";
        }else if(getid == "D"){
c = "primary";
}else if(getid == "E"){
c = "purple";
}else if(getid == "F"){
c = "info";
}

setitemsLinks(itemsLink,title,d,c,o,l,num);


if(getid == "B"){
items.push('<div class="col-12 text-center my-3 containeranimate">');
items.push('<div id="'+adSlotCenter+'" class="ads" data-label="advertisement"></div>');
items.push('</div>');
}
if(getid == "E"){
items.push('<div class="col-12 text-center my-3 containeranimate">');
items.push('<div id="'+adSlotBottom+'" class="ads" data-label="advertisement"></div>');
items.push('</div>');
}


        items.push('<div class="accordion-item">');
        items.push('<h2 class="accordion-header" id="'+getid+'">');
        items.push('<button class="accordion-button bg-light bg-gradient py-4" type="button" data-bs-toggle="collapse" data-bs-target="#item-'+getid+'" aria-expanded="true" aria-controls="item-'+getid+'">');
        items.push('<span class="info">');
        items.push(descriptionId);
        items.push('</span>');
        items.push('</button>');
        items.push('</h2>');
        items.push('<div id="item-'+getid+'" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">');
        items.push('<div class="accordion-body px-1">');
        items.push('<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">');




        var alllength = data.result[i].item;
            var title = data.result[i].title;

        	for(var t = 0;t<alllength.length;t++){

            var name = data.result[i].item[t].name;
            var itemdescription = data.result[i].item[t].description;
            var hasaudio = data.result[i].item[t].audio;

if(getid == "A"){
c = "orange";
        }else if(getid == "B"){
c = "warning";
        }else if(getid == "C"){
c = "success";
        }else if(getid == "D"){
c = "primary";
}else if(getid == "E"){
c = "purple";
}else if(getid == "F"){
c = "info";
}
var imgurlsvg = 'file/img/svg/'+getid+'/'+name+'.svg';

         items.push('<div class="col">');
         items.push('<div class="card text-center" id="'+getid+name+'">');
         items.push('<div class="card-header bgnew-'+c+'">');
         items.push(title + ' - ' + name);


         if(hasaudio){
         items.push('<button type="button" id="btnaudio'+getid+'-'+name+'" class="btn shadow-none border-0 splash-default ripple btnaudio" title="ملف صوتي" onclick="audPlayPause(\''+getid+'\',\''+name+'\')"><i class="fa fa-play"></i></button>');

         items.push('<audio id="audio'+getid+'-'+name+'">');
         items.push('<source src="file/sound/'+getid+'/'+name+'.mp3" type="audio/mp3">');
         items.push('</audio>');
}



         items.push('</div>');
         items.push('<div class="card-body">');
         items.push('<img src="'+imgurlsvg+'" onload="setb64img(this)" style="max-width: 13rem;" class="card-img-top p-2 signalurl" id="img-'+getid+name+'" alt="'+name+'"/>');
         items.push('</div>');
         items.push('<div class="card-footer">');
         items.push(itemdescription);
         items.push('</div>');
         items.push('</div>');
         items.push('</div>');


       	 	}

        items.push('</div>');
        items.push('</div>');
        items.push('</div>');
        items.push('</div>');



	}



itemsLink.push('</div>');
itemsLink.push('</div>');


htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div class="ads" id="'+adSlotTop+'" data-label="advertisement"></div>');
htmls.push('</div>');

htmls.push('<div class="mb-2">');
htmls.push(itemsLink.join(''));
htmls.push('</div>');


htmls.push(items.join(''));
document.title = "إشارات المرور";
$('#container').html(htmls.join(''));
setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom);

replaceAllLinkHash();





    });

  }


function setHomePage(adSlotTop,adSlotCenter,adSlotBottom){
var htmls = [''];

htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div class="ads" id="'+adSlotTop+'" data-label="advertisement"></div>');
htmls.push('</div>');


htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row mb-4">');
htmls.push('<div class="col-lg-8 mx-auto text-center">');
htmls.push('<h2 class="fs-1">إمتحانات التؤوريا</h2>');
htmls.push('<p class="mb-0">نماذج اسئلة التؤوريا الواردة في دائرة السير</p>');
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<hr/>');
htmls.push('<div class="row g-4">');






var title = ""
var c = "info"
var o = "15"
var l = ""
var ic = ""
var page = ""

for(var i =0;i<6;i++){
if(i == 0){
page = "private";
title = "خصوصي";
c = "info";
o = "15";
l = "sethtmlcontainer(\'private\')";
ic = "fa-solid fa-car-side";
}else if(i == 1){
page = "truck";
title = "شحن خفيف";
c = "primary";
o = "10";
l = "sethtmlcontainer(\'truck\')";
ic = "fa-solid fa-truck";
}else if(i == 2){
page = "haulage";
title = "شحن ثقيل";
c = "purple";
o = "10";
l = "sethtmlcontainer(\'haulage\')";
ic = "fa-solid fa-truck-container-empty";
}else if(i == 3){
page = "taxi";
title = "عمومي";
c = "warning";
o = "10";
l = "sethtmlcontainer(\'taxi\')";
ic = "fa-solid fa-taxi-bus";
}else if(i == 4){
page = "tractor";
title = "تراكتور";
c = "success";
o = "10";
l = "sethtmlcontainer(\'tractor\')";
ic = "fa-solid fa-tractor";
}else if(i == 5){
page = "motorcycle";
title = "دراجة نارية";
c = "orange";
o = "15";
l = "sethtmlcontainer(\'motorcycle\')";
ic = "fa-solid fa-motorcycle";
}
var description = "تؤوريا "+title;
sethtmlsqhome(htmls,title,description,c,o,l,ic,page);
}
htmls.push('</div>');
htmls.push('</div>');




htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row mb-4">');
htmls.push('<div class="col-lg-8 mx-auto text-center">');
htmls.push('<h2 class="fs-1">دراسة التؤوريا</h2>');
htmls.push('<p class="mb-0">دراسة قواعد الشاخصات والإشارات والية عمل المركبة</p>');
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<hr/>');
htmls.push('<div class="row g-4">');

var text_t= "تؤوريا ";
var title = ""
var d = ""
var c = "info"
var o = "15"
var l = ""
var ic = ""
var page = ""

for(var i =0;i<3;i++){
if(i == 0){
title = "إشارات المرور";
d = "دراسة الإشارات";
c = "success";
o = "10";
l = "sethtmlcontainer(\'signalsPage\')";
page = "signalsPage";
ic = "fa-solid fa-traffic-light-slow";
}else if(i == 1){
title = "كتاب التؤوريا";
d = "دراسة التؤوريا";
c = "cyan";
o = "10";
l = "sethtmlcontainer(\'ProgramPDF\')";
ic = "fa-solid fa-book";
page = "ProgramPDF";
}else if(i == 2){
title = "قانون المرور";
d = "قراءة القانون";
c = "dark";
o = "10";
l = "sethtmlcontainer(\'TrafficLawPage\')";
ic = "fa-solid fa-scale-balanced";
page = "TrafficLawPage";
}
sethtmlsqhome(htmls,title,d,c,o,l,ic,page)
}
htmls.push('</div>');
htmls.push('</div>');












htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div class="ads" id="'+adSlotCenter+'" data-label="advertisement"></div>');
htmls.push('</div>');
htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row mb-4">');
htmls.push('<div class="col-lg-8 mx-auto text-center">');
htmls.push('<h2 class="fs-1">الإجراءات</h2>');
htmls.push('<p class="mb-0">الإجراءات والخدمات الحكومية</p>');
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<hr/>');
htmls.push('<div class="row g-4">');


var text_t= "";
var title = "";
var d = "";
var c = "";
var o = "";
var l = "";
var ic = "";
var pageHash = "";

for(var i =0;i<5;i++){
if(i == 0){
title = "نتيجة الإمتحان";
d = "فحص نتيجة الإمتحان النظري/العملي";
c = "success";
o = "10";
l = "getalls();return false";
ic = "fa-solid fa-award";
pageHash = "getalls";
}else if(i == 1){
title = "إجراءات الرخصة";
d = "إجراءات التقدم لرخصة القيادة";
c = "cyan";
o = "10";
l = "steps();return false";
ic = "fa-solid fa-address-card";
pageHash = "steps";
}else if(i == 2){
title = "مواعيد الخدمات";
d = "مواعيد خدمات الدوائر الحكومية";
c = "purple";
o = "15";
l = "services(1);return false";
ic = "fa-solid fa-calendar-days";
pageHash = "services";
}else if(i == 3){
title = "الأسعار";
d = "اسعار الدروس والإختبارات العملية";
c = "warning";
o = "10";
l = "lessons();return false";
ic = "fa-solid fa-square-dollar";
pageHash = "lessons";
}else if(i == 4){
title = "اسعار الدورات";
d = "اسعار الدورات الإستكمالية";
c = "orange";
o = "10";
l = "coursesModal();return false";
ic = "fa-solid fa-circle-dollar";
pageHash = "CoursesModal";
}
sethtmlsqhome(htmls,title,d,c,o,l,ic,page,null,null,null,null,pageHash);
}

htmls.push('</div>');
htmls.push('</div>');
htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div class="ads" id="'+adSlotBottom+'" data-label="advertisement"></div>');
htmls.push('</div>');




document.title = "الصفحة الرئيسية - تؤوريا";
$('#container').html(htmls.join(''))


setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom);

}


//get All exams page
function setAllExamsPage(adSlotTop,adSlotCenter,adSlotBottom){
var htmls = [''];

htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div class="ads" id="'+adSlotTop+'" data-label="advertisement"></div>');
htmls.push('</div>');


htmls.push('<div class="container py-3 boxbtnlink containeranimate">');
htmls.push('<div class="row mb-4">');
htmls.push('<div class="col-lg-8 mx-auto text-center">');
htmls.push('<h2 class="fs-1">إمتحانات التؤوريا</h2>');
htmls.push('<p class="mb-0">نماذج اسئلة التؤوريا الواردة في دائرة السير</p>');
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<div class="row g-4">');






var text_t= "تؤوريا ";
var title = "";
var c = "info";
var o = "15";
var l = "";
var ic = "";
var page = "";



for(var i =0;i<6;i++){
if(i == 0){
title = "خصوصي";
c = "info";
o = "15";
l = "sethtmlcontainer(\'private\')";
ic = "fa-solid fa-car-side";
page = "private";
}else if(i == 1){
title = "شحن خفيف";
c = "primary";
o = "10";
l = "sethtmlcontainer(\'truck\')";
ic = "fa-solid fa-truck";
page = "truck";
}else if(i == 2){
title = "شحن ثقيل";
c = "purple";
o = "10";
l = "sethtmlcontainer(\'haulage\')";
ic = "fa-solid fa-truck-container-empty";
page = "haulage";
}else if(i == 3){
title = "عمومي";
c = "warning";
o = "10";
l = "sethtmlcontainer(\'taxi\')";
ic = "fa-solid fa-taxi-bus";
page = "taxi";
}else if(i == 4){
title = "تراكتور";
c = "success";
o = "10";
l = "sethtmlcontainer(\'tractor\')";
ic = "fa-solid fa-tractor";
page = "tractor";
}else if(i == 5){
title = "دراجة نارية";
c = "orange";
o = "15";
l = "sethtmlcontainer(\'motorcycle\')";
ic = "fa-solid fa-motorcycle";
page = "motorcycle";
}
var description = "تؤوريا "+title;
sethtmlsqhome(htmls,title,description,c,o,l,ic,page);
}
htmls.push('</div>');
htmls.push('</div>');
htmls.push('<div class="col-12 text-center my-3 containeranimate">');
htmls.push('<div id="'+adSlotBottom+'" class="ads" data-label="advertisement"></div>');
htmls.push('</div>');
document.title = "نماذج اسئلة التؤوريا";
$('#container').html(htmls.join(''));
setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom)


}


function sethtmlcontainer(page,isback){
numrefresh++;
document.title = "إنتظار...";
var widthlg =  $('#palmix').width();
var adSlotTop = 'adSlotTop220_'+numrefresh;
var adSlotCenter = 'adSlotCenter220_'+numrefresh;
var adSlotBottom = 'adSlotBottom220_'+numrefresh;
if(widthlg <221){
 adSlotTop = 'adSlotTop220_'+numrefresh;
 adSlotCenter = 'adSlotCenter220_'+numrefresh;
 adSlotBottom = 'adSlotBottom220_'+numrefresh;
}else if(widthlg >220 && widthlg <321){
 adSlotTop = 'adSlotTop320_'+numrefresh;
 adSlotCenter = 'adSlotCenter320_'+numrefresh;
 adSlotBottom = 'adSlotBottom320_'+numrefresh;

}else if(widthlg >320 && widthlg <480){
 adSlotTop = 'adSlotTop479_'+numrefresh;
 adSlotCenter = 'adSlotCenter479_'+numrefresh;
 adSlotBottom = 'adSlotBottom479_'+numrefresh;

}else if(widthlg >479 && widthlg <721){
 adSlotTop = 'adSlotTop720_'+numrefresh;
 adSlotCenter = 'adSlotCenter720_'+numrefresh;
 adSlotBottom = 'adSlotBottom720_'+numrefresh;

}else if(widthlg >720 && widthlg<930){
 adSlotTop = 'adSlotTop980_'+numrefresh;
 adSlotCenter = 'adSlotCenter980_'+numrefresh;
 adSlotBottom = 'adSlotBottom980_'+numrefresh;

}else if(widthlg >929){
 adSlotTop = 'adSlotTop1024_'+numrefresh;
 adSlotCenter = 'adSlotCenter1024_'+numrefresh;
 adSlotBottom = 'adSlotBottom1024_'+numrefresh;

}


if(!clearedTime && startAns){
Swal.fire({
  title: 'مغادرة الإختبار',
  icon: 'warning',
  showDenyButton: true,
  showCancelButton: false,
  text: 'هل أنت متأكد من مغادرة هذا الإختبار؟',
  confirmButtonColor: '#dc3545',
  denyButtonColor: '#6c757d',
  confirmButtonText: 'مغاردة',
  denyButtonText: 'إلغاء',
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
clearedTime = true;
startAns = false
sethtmlcontainer(page,false)

  }
})
return false
}


if(TeoriaPalMixApp){
var gethref = window.location.href;
if(page != 'ProgramPDF'){
scrollGoTo('body');
}
}else{
scrollGoTo('body');
}



if(page == 'ExamPage'){
examPage(adSlotTop,adSlotCenter,adSlotBottom);
}else if(page ==  'TrafficLawPage'){
trafficLaw(adSlotTop,adSlotCenter,adSlotBottom);
}else if(page == 'ProgramPDF'){
if(TeoriaPalMixApp){
ScriptAppWeb.goToPDF();
return false;
}else{
programPDF(adSlotTop,adSlotCenter,adSlotBottom);
}
}else if(page == 'signalsPage'){
signalsHtml(adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'HomePage'){
setHomePage(adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'tableUserPage'){
tableUserquiz(adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'AllExamsPage'){
setAllExamsPage(adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'ContactUsPage'){
contactUsPage(adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'private'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'truck'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'haulage'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'taxi'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'tractor'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'motorcycle'){
setTypePage(page,adSlotTop,adSlotCenter,adSlotBottom)
}else if(page == 'privacy'){
 privacyPage(adSlotTop,adSlotCenter,adSlotBottom)
 }else if(page == 'userProfilePage'){
    userProfilePage()
    }else if(page == 'managerPage'){
       managerPage()
 }




if(page != 'ExamPage'){
pushHistory(page,null,null,null,null,isback)
}




setSelecter(page);
setSelectertheme();
var sidebarLinkshow = $("#sidebarLink");
if(sidebarLinkshow.hasClass('show')){
$("#sidebarLink").offcanvas('hide');
}

if(TeoriaPalMixApp){
ScriptAppWeb.onSendQuizs();

ScriptAppWeb.closeanimateFab();

if(page == 'ExamPage'){
ScriptAppWeb.pageQuizs("true");
}else{
ScriptAppWeb.pageQuizs("false");
}

}

}


//Selecter active
function setSelecter(page){
var activelink = $('.navbar-nav,#userlistRigth').find('a');
for(var i =0;i<activelink.length;i++){
var x = activelink.eq(i).hasClass('active');
if(x){
activelink.eq(i).removeClass('active')
}
var getPage = activelink.eq(i).attr('href');
getPage = getPage.includes(page)

if(getPage){
activelink.eq(i).addClass('active')
}


}
}

function setSelectertheme(){
var activetheme = $('#palmix').attr('data-theme');

activetheme = 'text-'+activetheme;
var colors = $('#colors-collapse a span').find('i:eq(1)');

for(var d=0;d<colors.length;d++){
$('#colors-collapse a').eq(d).removeClass('active')
if(colors.eq(d).hasClass(activetheme)){
$('#colors-collapse a').eq(d).addClass('active');
}
}
}


function scrollGoTo(e) {
    $("body,html").animate({
        scrollTop: $(e).offset().top - 15
    }, 1e1, function() {
        $(this).stop(!0, !0)
    })
}






function startsetHtml(type,quiz_num,setnumquis,examreview,isback){
var qid = examreview;
if(!clearedTime && startAns){
Swal.fire({
  title: 'مغادرة الإختبار',
  icon: 'warning',
  showDenyButton: true,
  showCancelButton: false,
  text: 'هل أنت متأكد من مغادرة هذا الإختبار؟',
  confirmButtonColor: '#dc3545',
  denyButtonColor: '#6c757d',
  confirmButtonText: 'مغاردة',
  denyButtonText: 'إلغاء',
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
clearedTime = true
clearInterval(xTimeInterval)
startsetHtml(type,quiz_num,setnumquis,examreview,isback)

  }
})
return false
}



startAns = false;
$('#html').html('')
quiz_num = parseInt(quiz_num);
setnumquis = parseInt(setnumquis);
	 type = type;
	 quiz_num = quiz_num;
	 setnumquis = setnumquis+(-1);


	$.getJSON("teoria/" + type + "/" + quiz_num + ".json?", {
		alt: "json"
	}).catch(function(error) {
		console.log("error", error)
	}).done(function(data) {
    sethtmlcontainer('ExamPage',false);
		$("#nextBtn").attr('data-max', data.length);
		$("#backBtn").attr('data-max', data.length);
		var allquis = ['']
		$.each(data, function(key, val) {
			allquis.push('<div class="col text-center"><button data-num="' + key + '" id="Q' + key + '" class="list-group-item list-group-item-action splash-default ripple list-group-item-light border rounded p-2 numBtn"  data-userans="0" data-ans="' + (parseInt(data[key].answer) + 7) + '">' + (key + 1) + '</button></div>');
		});




		$("#allquis").html(allquis.join(''))
	}).then(function(data) {
		setquiz(data, setnumquis);
        setAllquestions(type,quiz_num)
	});
	var showSignals = function(e) {
		return e.split("[[").join("<i class='mx-1 signal ").split("]]").join("'></i>")
	}

	function setquiz(data, setnumquis) {



		var nt = 0;
		var idsarray = [];
		var obj = [];
		var showAns = false;
		var loops = false;
		var loopsC = false;
		var success = 25;
		var autoNext = document.querySelector('#autoNext');
		var minutes = 39;
		var seconds = 60;
//		 minutes = 0;
//		 seconds = 4;
		var setsz = '0';
		var setmz = '0';
        var present = 0;
		var timer;
        var typeAr ="تؤوريا";
		if (type == "private") {
			success = data.length-5;
            typeAr = "خصوصي"
		} else if (type == "truck") {
			success = data.length-5;
            typeAr = "شحن خفيف"
		} else if (type == "haulage") {
			success = data.length-5;
            typeAr = "شحن ثقيل"
		} else if (type == "trella") {
			success = data.length-5;
		} else if (type == "taxi") {
			success = data.length-5;
            typeAr = "عمومي"
		} else if (type == "motorcycle") {
			success = data.length-5;
            typeAr = "دراجة نارية"
		} else if (type == "tractor") {
			success = data.length-5;
			typeAr = "تراكتور"
		}


		autoNext.onchange = function() {
		if(TeoriaPalMixApp){
		localStorage.setItem("autoNext", (autoNext.checked) ? 1 : 0);
		}else{
					document.cookie = (autoNext.checked) ? 'autoNext = 1' : 'autoNext = 0';

		}

		};




				if(TeoriaPalMixApp){
		$('#autoNext').prop('checked', localStorage.getItem("autoNext") == 1);
}else{
$('#autoNext').prop('checked', getCookie("autoNext") == 1);
}



if(!clearedTime){
clearInterval(xTimeInterval);
}





$(".totalQues").text(data.length);
$(".totalAnswers").html('<span>' + data.length + '/0<span>');

		function send(msg) {

			showAns = true;
			var trueans = 0;


var createCID = [];
			for (var i = 0; i < data.length; i++) {
				var startsend = $("#allquis").find("button").eq(i);
				var startsendGetNum = startsend.attr("data-userans");
				var startsendGetID = startsend.attr("data-num");
				var thisis = false;




$("#allquis button").removeClass(['bg-dark','text-white','bg-opacity-75']);
				if (startsendGetNum == data[i].answer) {
					thisis = true;
					trueans++;
					startsend.addClass('list-group-item-success').removeClass('list-group-item-light');
				} else if(startsendGetNum == "0"){
					startsend.addClass('list-group-item-warning').removeClass('list-group-item-light');
				} else {
					startsend.addClass('list-group-item-danger').removeClass('list-group-item-light');
				}


createCID.push('{"q":'+startsendGetID+',"ua":'+startsendGetNum+',"a":'+data[i].answer+',"is":'+thisis+'}');

			}







$(".trueQues").html(trueans);




			if (trueans < success) {


            $("#totalQuesId").addClass("text-danger");

$('#alerts').removeClass(['d-none','border-warning']).addClass('border-danger');
$('#alerts .card-body').addClass('text-danger').removeClass('text-secondary');
$('#alerts .card-header').html(msg);
$('#alerts .card-title').html('لم تنجح!').removeClass('text-dark');
$('#alerts .card-text').html('للأسف لم تنجح، علامتك هي ' + trueans + ' من ' + data.length + '.');





			} else if (trueans >= data.length) {
            $("#totalQuesId").addClass("text-success");

$(".trueQues").append('<i class="fa-solid fa-trophy-star mx-1"></i>');
$('#alerts').removeClass(['d-none','border-warning']).addClass('border-success');
$('#alerts .card-body').addClass('text-success').removeClass('text-secondary');
$('#alerts .card-header').html(msg);
$('#alerts .card-title').html('<i class="fa-solid fa-trophy-star"></i> لقد نجحت بامتياز!').removeClass('text-dark');
$('#alerts .card-text').html('عمل رائع، تمت الإجابة عن جميع الأسئلة بالشكل الصحيح.');




			} else if (trueans >= success) {
            $("#totalQuesId").addClass("text-success");


$('#alerts').removeClass(['d-none','border-warning']).addClass('border-success');
$('#alerts .card-body').addClass('text-success').removeClass('text-secondary');
$('#alerts .card-header').text(msg);
$('#alerts .card-title').text('لقد نجحت!').removeClass('text-dark');
$('#alerts .card-text').text('عمل جيد، علامتك هي ' + trueans + ' من ' + data.length + '.');



			}
            $("#totalQuesId").removeClass("d-none");
			clearInterval(xTimeInterval);
            clearedTime = true;
			nextques(data, 0);

if(TeoriaPalMixApp){
ScriptAppWeb.onSendQuizs();
}else{
            	$(".sendAnswers").addClass('d-none');
}

var jsonpush = createCID.join();
setCJ(jsonpush,data,type,quiz_num,trueans)






setAlertQuiz(data.length,trueans,success,msg);
$(".progressd").addClass('d-none');
startAns = false;
		}
var showingquiz = 0;
		function fillQuestionInTable(e, t) {
        showingquiz++;
			var dataans = parseInt(e.answer);
			var datauserans = $("#Q" + setnumquis).attr('data-userans');
			var datauserans = parseInt(datauserans);
			$(".questionID").text("#" + e.id);
			$(".option").removeClass("bg-default-active bg-gradient");
			$("#textques").html('السؤال رقم ' + t),
				$("#question .question").html(showSignals(e.question)),
				$("#questionNum").html(t),
				$("#quiz .answer1 .an_content").html(showSignals(e.a));
			$("#quiz .answer2 .an_content").html(showSignals(e.b));
			$("#quiz .answer3 .an_content").html(showSignals(e.c));
			$("#quiz .answer4 .an_content").html(showSignals(e.d));
			$(".numBtn").removeClass('active');
			$(".numBtn").eq(t - 1).addClass('active');
			$("#question").attr({
				'data-id': t - 1,
				'data-ans': dataans + 7
			});
			$(".option").attr({
				'data-id': t - 1,
				'data-ans': dataans + 7
			});
			var userans = $("#Q" + (t - 1)).attr('data-userans');
			var danum = $("#Q" + (t - 1)).attr('data-num');
			var ansS = $("#Q" + (t - 1)).attr('data-ans');
			userans = parseInt(userans);
			danum = parseInt(danum);
			ansS = parseInt(ansS) - 7;
			if (userans >= 0) {
				$("#answer" + userans).addClass("bg-default-active").addClass("bg-gradient");
			}
			if (showAns) {
				$('.container a').removeClass('bg-opacity-75');
				$('.container a').addClass('bg-opacity-50');
				$(".option").removeClass('bg-danger');
				$(".option").removeClass('bg-success');
				$(".option").removeClass('bg-default-active');
				$(".option").removeClass('bg-gradient');
				$(".option").addClass('bg-opacity-50');
				$('#Q' + danum).removeClass('bg-opacity-50');
				if (userans == ansS) {
					$("#answer" + ansS).addClass("bg-success");
					var setch = $("#answer" + ansS + " .an_content").html();
					$("#answer" + ansS + " .an_content").html('<i class="fa-solid fa-check mx-1"></i>'+ setch);
				} else {
					$("#answer" + ansS).addClass("bg-success");
					var setch = $("#answer" + ansS + " .an_content").html();
					$("#answer" + ansS + " .an_content").html('<i class="fa-solid fa-check mx-1"></i>'+ setch);
					$("#answer" + userans).addClass("bg-danger");
					var setch = $("#answer" + userans + " .an_content").html();
					$("#answer" + userans + " .an_content").html('<i class="fa-solid fa-xmark mx-1"></i>'+ setch);
				}
			}
			$(".numBtn").eq(t - 1).removeClass('list-group-item-light');
			$(".numBtn").eq(t - 1).addClass('list-group-item-secondary');
if(showingquiz >1 || examreview == 1){
scrollGoTo($('.table-secondary'))
		}

var page = 'ExamPage';
pushHistory(page,type,quiz_num,t,examreview,isback)
document.title = "نموذج تؤوريا "+typeAr+" "+quiz_num+" (س "+t+")";
		}



		function nextques(data, setnumquis) {
			$("#nextBtn").removeClass('disabled');
			var maxNumQ = $("#nextBtn").attr('data-max');
			var userans0attr = $("#allquis").find("button[data-userans='0']").length;
			maxNumQ = parseInt(maxNumQ);
			var e = data[setnumquis];
			$("#answer1 th").html('أ');
			$("#answer2 th").html('ب');
			$("#answer3 th").html('ج');
			$("#answer4 th").html('د');
			$("#nextBtn").attr('data-num', setnumquis + 1);
			$("#backBtn").attr('data-num', setnumquis - 1);





            if ((maxNumQ -1) == setnumquis && !showAns) {
				var userans0get = $("#allquis").find("button[data-userans='0']").eq(0).attr("data-num");
                $("#nextBtn").addClass('disabled');
                }
             if(userans0get != undefined){
                userans0get = parseInt(userans0get);
                if(userans0get != 9){
				$("#nextBtn").attr('data-num', userans0get);
                loops = true;
                loopsC = true;
                $("#nextBtn").removeClass('disabled');
                }}




			if (loops && !showAns && parseInt(userans0get) == parseInt(setnumquis)) {
				var userans0get = $("#allquis").find("button[data-userans='0']").eq(0).attr("data-num");
				userans0get = parseInt(userans0get) + 1;
				$("#nextBtn").attr('data-num', userans0get);
			}


            if(showAns && (maxNumQ -1) == setnumquis){
                $("#nextBtn").addClass('disabled');
            	}else if(userans0get === undefined && !showAns && (maxNumQ -1) == setnumquis){
                $("#nextBtn").addClass('disabled');
                }else{
                $("#nextBtn").removeClass('disabled');
                }


			if (setnumquis == 0) {
				$("#backBtn").addClass('disabled');
			} else {
				$("#backBtn").removeClass('disabled');
			}
			fillQuestionInTable(e, setnumquis + 1);

		}






		$("#nextBtn").click(function() {
       		if(loopsC){
        	loops = true;
            }else{
            loops = false;
            }
			var getNumQ = $("#nextBtn").attr('data-num');
			var maxNumQ = $("#nextBtn").attr('data-max');
			getNumQ = parseInt(getNumQ);
			maxNumQ = parseInt(maxNumQ);
			if (getNumQ != maxNumQ) {
				nextques(data, getNumQ);
			}
		});
		$("#backBtn").click(function() {
       		if(loopsC){
        	loops = true;
            }else{
            loops = false;
            }
			var setNumQ = $(this).attr('data-num');
			setNumQ = parseInt(setNumQ);
			if (setNumQ >= 0) {
				nextques(data, setNumQ);

			}
		});
		$(".numBtn").click(function() {
			var setNumQ = $(this).attr('data-num');
		//	loops = false;
			setNumQ = parseInt(setNumQ);
			nextques(data, setNumQ);
		});
		$(".option").click(function() {
			var getNumAnsId = $(this).attr('data-id');
			var getuserNumAns = $(this).attr('data-num');
			var getNumAns = $(this).attr('data-ans');
            startSet(getNumAnsId,getuserNumAns,getNumAns);
            startAns = true;
		});




if(examreview >10){
setexamreview = examreview;
}else if(qid>99999){
setexamreview = qid;
}
getdata(setexamreview);

if(setexamreview>10){
var msgx = 'مراجعة الإمتحان';
var getuserans = 0;
var getqid = localStorage.getItem('q'+setexamreview);
if(getqid != null){
getqid = JSON.parse(getqid);
var getqidl = getqid.result.length;


if(getqidl >1){

$('.showAansQuiz').addClass('d-none');
$('#chautoNext').html('<span class="fs-7">مدة الإختبار</span>');
var durations = getqid.duration;
$( document ).ready(function() {
        clearInterval(xTimeInterval);
        clearedTime = true;
        $('#quiz-timer').html(durations);
});





for(var i =0;i<getqidl;i++){
getuserans = getqid.result[i].ua;
$('#Q'+i).attr('data-userans',getuserans);
}


setqsave(setexamreview,msgx);
}


}else if(window.navigator.onLine){

$.getJSON("https://pmteoria-default-rtdb.firebaseio.com/quiz/q"+setexamreview+".json", {}).catch(function(error) {

$('#alerts').removeClass('d-none').removeClass('border-success');
     $('#alerts').removeClass('d-none').addClass('border-warning');
     $('#alerts .card-body').addClass('text-secondary');
     $('#alerts .card-header').html('<i class="fa-solid fa-hexagon-exclamation"></i> حدث خطأ');
     $('#alerts .card-title').html('حدث خطأ في جلب نتيجة هذا الإختبار!').addClass('text-dark');
     $('#alerts .card-text').html('الرجاء إعادة المحاولة فيما بعد.');


}).done(function(recosts) {
if(recosts != null){
var userIdSite = recosts.userId;
    var getjsonUrl = window.atob(recosts.jsonFile);
    var getqid = JSON.parse(getjsonUrl);
    var getqidl = getqid.result.length;







    if (getqidl > 1) {
        $('.showAansQuiz').addClass('d-none');
        $('#chautoNext').html('<span class="fs-7">مدة الإختبار</span>');
        var durations = getqid.duration;
        $(document).ready(function() {
            clearInterval(xTimeInterval);
            clearedTime = true;
            $('#quiz-timer').html(durations);
        });
        for (var i = 0; i < getqidl; i++) {
            getuserans = getqid.result[i].ua;
            $('#Q' + i).attr('data-userans', getuserans);
        }
        setqsave(setexamreview, msgx);
    }



$.getJSON("https://pmteoria-default-rtdb.firebaseio.com/User/ID"+userIdSite+".json", {
         }).catch(function(error) {

    }).done(function(recosts) {

if(recosts){
    var userFullName = recosts.profile.FullName;
    var userSetting = recosts.setting;
    var manager = recosts.profile.manager;


var nickname = null;
var shareName = null;
var userNickname = null;
var FullName = null;
var isManager = null;
if(!userSetting){
nickname = userFullName;
shareName = true;
}else{
nickname = recosts.setting.nickname;
shareName = recosts.setting.shareName;
}
if(manager){
nickname = nickname +'<i class="fa-solid fa-badge-check text-primary mx-1"></i>';
}

if(shareName == false || shareName == null){
nickname = "مجهـول";
}




$('#alerts').removeClass('d-none').removeClass('border-warning');
     $('#alerts').removeClass('d-none').addClass('border-success');
     $('#alerts .card-body').addClass('text-secondary');
     $('#alerts .card-header').html('<i class="fa-duotone fa-user"></i> ملاحظة');
     $('#alerts .card-title').html('حول هذا الإختبار').addClass('text-dark');
     $('#alerts .card-text').html('تم إجراء هذا الإختبار بواسطة <b>' + nickname + '</b>');
}else{
$('#alerts').removeClass('d-none').removeClass('border-warning');
     $('#alerts').removeClass('d-none').addClass('border-success');
     $('#alerts .card-body').addClass('text-secondary');
     $('#alerts .card-header').html('<i class="fa-duotone fa-user"></i> ملاحظة');
     $('#alerts .card-title').html('حول هذا الإختبار').addClass('text-dark');
     $('#alerts .card-text').html('تم إجراء هذا الإختبار بواسطة <b>مجهول</b>');

}







});



    }else{
     $('#alerts').removeClass('d-none').removeClass('border-success');
     $('#alerts').removeClass('d-none').addClass('border-warning');

     $('#alerts .card-body').addClass('text-secondary');
     $('#alerts .card-header').html('<i class="fa-solid fa-hexagon-exclamation"></i> لم نعثر عليه');
     $('#alerts .card-title').html('لم نعثر على ملخص هذا الإختبار!').addClass('text-dark');
     $('#alerts .card-text').html('يبدو أنك اتبعت رابط خاطئ أو أن نتيجة هذا الإختبار تم حذفها.');
     }
});




}else{


$( document ).ready(function() {
     $('#alerts').removeClass('d-none').removeClass('border-success');
     $('#alerts').removeClass('d-none').addClass('border-warning');
$('#alerts .card-body').addClass('text-secondary');
$('#alerts .card-header').html('<i class="fa-solid fa-hexagon-exclamation"></i> لم نعثر عليه');
$('#alerts .card-title').html('لم نعثر على ملخص هذا الإختبار!').addClass('text-dark');
$('#alerts .card-text').html('لم نعثر على هذا الإختبار في هاتفك، حاول الإتصال بالإنترنت لتحميل نتائجه من خوادمنا.');




});


}
$(".progressMobile").addClass('d-none');
qid = 0;
setexamreview = 0;
}







function setqsave(qid,msg){


			showAns = true;
			var trueans = 0;


var createCID = [];
			for (var i = 0; i < data.length; i++) {
				var startsend = $("#allquis").find("button").eq(i);
				var startsendGetNum = startsend.attr("data-userans");
				var startsendGetID = startsend.attr("data-num");
				var thisis = false;


$("#allquis button").removeClass(['bg-dark','text-white','bg-opacity-75']);
				if (startsendGetNum == data[i].answer) {
					thisis = true;
					trueans++;
					startsend.addClass('list-group-item-success').removeClass('list-group-item-light');
				} else if(startsendGetNum == "0"){
					startsend.addClass('list-group-item-warning').removeClass('list-group-item-light');
				} else {
					startsend.addClass('list-group-item-danger').removeClass('list-group-item-light');
				}


createCID.push('{"q":'+startsendGetID+',"ua":'+startsendGetNum+',"a":'+data[i].answer+',"is":'+thisis+'}');

			}


$(".trueQues").html(trueans);



			if (trueans < success) {
            $("#totalQuesId").addClass("alert alert-danger px-0 mx-0 py-2");
            $("#totalQuesId span:eq(0)").html('<i class="fa-solid fa-triangle-exclamation mx-1"></i>نتيجة الإمتحان');





			} else if (trueans >= data.length) {

            $("#totalQuesId").addClass("alert alert-success px-0 mx-0 py-2");
            $("#totalQuesId span:eq(0)").html('<i class="fa-solid fa-trophy-star mx-1"></i>نتيجة الإمتحان');

			} else if (trueans >= success) {
            $("#totalQuesId").addClass("alert alert-success px-0 mx-0 py-2");
            $("#totalQuesId span:eq(0)").html('<i class="fa-solid fa-thumbs-up mx-1"></i>نتيجة الإمتحان');
			}
            $("#totalQuesId").removeClass("d-none");

			nextques(data, 0);


if(TeoriaPalMixApp){
ScriptAppWeb.onSendQuizs();
}else{
            	$(".sendAnswers").addClass('d-none');
}

}






















function startSet(getNumAnsId,getuserNumAns,getNumAns){
getNumAnsId = parseInt(getNumAnsId);
getuserNumAns = parseInt(getuserNumAns);
getNumAns = parseInt(getNumAns) - 7;
			getNumAnsId = parseInt(getNumAnsId);
			getuserNumAns = parseInt(getuserNumAns);
			getNumAns = parseInt(getNumAns) - 7;
			if (!showAns) {
				setC(getNumAnsId, getNumAns, getuserNumAns)
			}
			if (loops) {
				var userans0get = $("#allquis").find("button[data-userans='0']").eq(0).attr("data-num");
				$("#nextBtn").attr('data-num', userans0get);
			}
			var userans0attr = $("#allquis").find("button[data-userans='0']").length;
			var useransd = data.length - userans0attr;
			var present = ((useransd / data.length) * 100 >> 0);
			if (present <= 100) {
				$("#progressquiz").attr('style', 'width:' + present + '%').html(present + '%');
				$("#progressquizmobile").attr('style', 'width:' + present + '%').html('التقدم ' + data.length + '/' + useransd);
				$(".totalAnswers").html('<span>' + data.length + '/' + useransd + '<span>');
			}



            if(present == 100){
            loops = false;
			if (userans0attr == 0 && !showAns) {
				//$("#nextBtn").html('تقـديــم').removeClass('btn-outline-default').addClass('btn-success');
				//$("#nextBtn").attr('data-num',100);


if(TeoriaPalMixApp){
ScriptAppWeb.onFinishQuizs();
}else{
				$(".sendAnswers").removeClass('d-none');
}


                $("#sendAnswers").addClass('theend');



 $('#sendAnswers')
   .click(function (event) {
   if($('#sendAnswers').hasClass('theend')){
   send('ملاحظة');
   $('#sendAnswers').removeClass('theend');
   }
});





				$("#progressquiz").addClass('bg-success').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);
				$("#progressquizmobile").addClass('bg-success').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);

			}



            }


			if (autoNext.checked && !showAns && present != 100) {

			var getNumQ = $("#nextBtn").attr('data-num');
			var maxNumQ = $("#nextBtn").attr('data-max');
			getNumQ = parseInt(getNumQ);
			maxNumQ = parseInt(maxNumQ);
			clearTimeout(timer);
			timer = setTimeout(function() {
			if (getNumQ != maxNumQ) {
				nextques(data, getNumQ);
			}
			//	}, 000);
				}, 400);
			}


var salert = $("#alerts").hasClass('d-none');
if(!salert&&!showAns&&useransd>=2){
$("#alerts").addClass('d-none');
}


}





		function setC(getNumAnsId, getNumAns, NumAns) {
			$("#Q" + getNumAnsId).attr('data-userans', NumAns)
			$(".option").removeClass("bg-default-active bg-gradient");
			$("#answer" + NumAns).addClass("bg-default-active bg-gradient");
			$("#Q" + getNumAnsId).addClass("bg-dark p-2 text-white bg-opacity-75");
			//bg-success text-light
		}
		nextques(data, setnumquis);
		xTimeInterval = setInterval(function() {
			seconds--;
            clearedTime = false;
			if (seconds == -1) {
				seconds = 59;
				minutes--;
			}
			if (seconds > 9) {
				setsz = ''
			} else {
				setsz = '0'
			}
			if (minutes > 9) {
				setmz = ''
			} else {
				setmz = '0'
			}
			if (minutes > 9) {
				$('#quiz-timer').html(setmz + minutes + ":" + setsz + seconds);
			} else if (minutes > 5) {
            $('.quiz-timer').addClass('text-primary');
				$('#quiz-timer').html(setmz + minutes + ":" + setsz + seconds);
			} else {
            $('.quiz-timer').addClass('text-danger');
				$('#quiz-timer').html(setmz + minutes + ":" + setsz + seconds);
			}
			if (minutes == -1) {
				clearInterval(xTimeInterval);
                clearedTime = true;
				$('#quiz-timer').text('00:00');
				send('إنتهى الوقت!');
                $('#sendAnswers').removeClass('theend');




var getPresent = $("#progressquiz").text();
getPresent = getPresent.includes('100')

if(getPresent){
$("#progressquiz").addClass('bg-success').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);
$("#progressquizmobile").addClass('bg-success').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);
}else{
$("#progressquiz").addClass('bg-danger').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);
$("#progressquizmobile").addClass('bg-danger').removeClass([ "progress-bar-striped","bg-default", "progress-bar-animated" ]);
}
			}
		}, 1000);


	}



}


function starts(type,quiz_num,setnumquis,examreview,isback){

if(!clearedTime && startAns){
Swal.fire({
  title: 'مغادرة الإختبار',
  icon: 'warning',
  showDenyButton: true,
  showCancelButton: false,
  text: 'هل أنت متأكد من مغادرة هذا الإختبار؟',
  confirmButtonColor: '#dc3545',
  denyButtonColor: '#6c757d',
  confirmButtonText: 'مغاردة',
  denyButtonText: 'إلغاء',
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
startsetHtml(type,quiz_num,setnumquis,examreview,isback);
if(TeoriaPalMixApp){
ScriptAppWeb.onSendQuizs();
}
  }
})

}else{
startsetHtml(type,quiz_num,setnumquis,examreview,isback)
}
}


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}


//get all quiz
function setAllQuizTable(createallqj,setnumquiz){
var gc = createallqj.result.length;
if(gc > 0){
$('#tablequiz').html('');
var p1 = [''];








p1.push('<div class="table-responsive">');
p1.push('<div class="table-wrapper px-1 pb-0">');
p1.push('<div class="table-title bg-default">');

p1.push('<div class="row">');
p1.push('<div class="col col-md-7">');
p1.push('<div class="titletable"><i class="fa-solid fa-folder-user" style=""></i> <b>سجل </b>الإختبارات</div>');
p1.push('</div>');

p1.push('<div class="col offset-md-3 text-end">');
p1.push('<button type="button" class="btn btn-sm btn-light m-0" onclick="setBtnIdDeleteAll()"><i class="fa-solid fa-trash-can"></i> حذف الكل</button>');
p1.push('</div>');


p1.push('</div>');
p1.push('</div>');
p1.push('<table class="table table-striped table-hover">');

p1.push('<thead><tr>');
p1.push('<th>#</th>');
p1.push('<th class="t_type">تؤوريا</th>');
p1.push('<th class="t_idQuiz">رقم الإمتحان</th>');
p1.push('<th class="t_date">التاريخ</th>');
p1.push('<th class="t_duration">المدة</th>');
p1.push('<th class="t_mark"><span>العلامة</span></th>');
p1.push('<th class="t_result"><span>النتيجة</span></th>');
p1.push('<th>إجرائات</th>');
p1.push('</tr></thead>');

p1.push('<tbody>');


var correct_answers,duration,num_ID,number,quiz_ID,type,dates,resultQuiz,year,month,date,theTime,theDate,qid,active,viewquiz,typeAr,hours12,textcolor,l10;

qid = setnumquiz;
active = '';
l10 = 0;
    for(var i = 0;i<gc;i++){
    var setdatas = createallqj.result;
    var getsq =setdatas[i].id;

    var getsq1 = 'q'+getsq;
var dataStorage = localStorage.getItem(getsq1);
	var getQS = JSON.parse(dataStorage);
	 dataStorage = JSON.parse(dataStorage);
correct_answers = dataStorage.correct_answers;
duration = dataStorage.duration;
num_ID = dataStorage.num_ID;
number = dataStorage.number;
quiz_ID = dataStorage.quiz_ID;
type = dataStorage.type;
dates = dataStorage.date;

if(correct_answers == 30){
resultQuiz = '<i class="fa-solid fa-trophy-star text-success" title="ناجح بامتياز"></i>'
textcolor = 'text-success';
}else if(correct_answers >= 25){
resultQuiz = '<i class="fa-solid fa-face-smile text-success" title="ناجح"></i>'
textcolor = 'text-success';
}else{
resultQuiz = '<i class="fa-solid fa-face-frown text-danger" title="لم تنجح"></i>';
textcolor = 'text-danger';
}

var setDate = new Date(dates);

year = setDate.getFullYear();
month = setDate.getMonth() + 1;
date = setDate.getDate();
hours12 = formatAMPM(setDate);

theDate = year+'/'+month+'/'+date;
theTime = hours12;




if(qid == num_ID){
active = 'table-default';
viewquiz = 'd-none';
}else{
active = '';
viewquiz = ''
}

if(type == "private"){
typeAr = "خصوصي"
}else if(type == "truck"){
typeAr = "شحن خفيف"
}else if(type == "haulage"){
typeAr = "شحن ثقيل"
}else if(type == "taxi"){
typeAr = "عمومي"
}else if(type == "tractor"){
typeAr = "تراكتور"
}else if(type == "motorcycle"){
typeAr = "دراجة نارية"
}else{
typeAr = type;
}



if(i == 10){
p1.push('</tbody>');
p1.push('<tbody class="collapse border-0" id="collapseUserTable">');
}
if(i>10){
l10++;
}

p1.push('<tr class="'+active+'">');
p1.push('<td>'+(i+1)+'</td>');
p1.push('<td class="t_type"><a onclick="sethtmlcontainer(\''+type+'\');return false" href="?page='+type+'">'+typeAr+'</a></td>');
p1.push('<td class="t_idQuiz"><a onclick="startsetHtml(\''+type+'\','+quiz_ID+',1,1)" href="javascript:;">'+quiz_ID+'</a></td>');
p1.push('<td class="t_date" title="تاريخ الإمتحان '+theDate+' - '+theTime+'">'+theDate+'</td>');
p1.push('<td class="t_duration">'+duration+'</td>');
p1.push('<td class="t_mark '+textcolor+'">'+number+'/'+correct_answers+'</td>');
p1.push('<td>'+resultQuiz+'</td>');
p1.push('<td>');
p1.push('<a onclick="startsetHtml(\''+type+'\','+quiz_ID+',1,'+num_ID+')" href="javascript:;" class="viewquiz '+viewquiz+'" title="مراجعة الإمتحان" data-toggle="tooltip"><i class="fa-solid fa-eye"></i></a>');
p1.push('<a href="javascript:;" onclick="setBtnIdDelete('+num_ID+')" class="delete text-danger" title="حذف" data-toggle="tooltip"><i class="fa-solid fa-circle-x"></i></a>');
p1.push('</td>');
p1.push('</tr>');








}




p1.push('</tbody>');
p1.push('</table>');





p1.push('</div></div>');
if(gc > 10){
p1.push('<div class="text-center mb-4">');
p1.push('<button class="btn btn-sm btn-default" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUserTable" aria-expanded="false" aria-controls="collapseUserTable" id="btnCollapseUserTable">إظهـار المزيــد ('+l10+') <i class="fa-solid fa-angles-down mx-2"></i></button>');
p1.push('</div>');
}





$('#tablequiz').html(p1.join(''));


if(gc > 10){
var myCollapsible = document.getElementById('collapseUserTable')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
$('#btnCollapseUserTable').html('إظهـار '+l10+' أخرى <i class="fa-solid fa-angles-down mx-2"></i>')
})
myCollapsible.addEventListener('show.bs.collapse', function () {
$('#btnCollapseUserTable').html('إخفــاء <i class="fa-solid fa-angles-down fa-rotate-180 mx-2"></i>')
})
}
}
}

//getdata
function getdata(setnumquiz){
var getallq = getCookie("quiz");
var createnewalljs_;
if(TeoriaPalMixApp){

	createnewalljs_ = {count: 0,result: []};
	createnewalljs_ = JSON.stringify(createnewalljs_);
	createnewalljs_ = window.btoa(createnewalljs_);

getallq = localStorage.getItem("quiz")||createnewalljs_;
}
if(getallq){
var atoballqj = window.atob(getallq);
var getJSON = JSON.parse(atoballqj);

if(getJSON.result.length>0){
//all
$("#tablequiz").removeClass("d-none");
	var createallq = getCookie("quiz");

if(TeoriaPalMixApp){
createallq = localStorage.getItem("quiz")||createnewalljs_;
}

	var createallqj = window.atob(createallq);
	createallqj = JSON.parse(createallqj);

setAllQuizTable(createallqj,setnumquiz)
}else if(setnumquiz == 9){
$("#tablequiz").html('<div class="alert alert-warning" role="alert"> عذرًا ! لم يتم العثور على اختبارات محفوظة. </div>');
}else{
$("#tablequiz").addClass("d-none");
}
}






}


//remove cookie
function setBtnIdDelete(id) {
Swal.fire({
  title: 'تأكيد عملية الحذف؟',
  text: "هل تريد حقًا حذف هذا الإختبار؟ لا يمكن التراجع عن هذه العملية.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor:'#d33',
  cancelButtonColor: '#6c757d',
  confirmButtonText: 'حذف',
  cancelButtonText: 'إلغاء'
}).then((result) => {
  if (result.isConfirmed) {
  delete_quiz(id,false);
  }
})
}

function setBtnIdDeleteAll() {
Swal.fire({
  title: 'تأكيد عملية الحذف؟',
  text: "هل تريد حقًا حذف جميع إختباراتك؟ لا يمكن التراجع عن هذه العملية.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor:'#d33',
  cancelButtonColor: '#6c757d',
  confirmButtonText: 'حذف',
  cancelButtonText: 'إلغاء'
}).then((result) => {
  if (result.isConfirmed) {
  delete_quiz(0,true);
  }
})
}

function delete_quiz(id,all) {

if(all){
var getallq = getCookie("quiz");
if(TeoriaPalMixApp){

	var createnewalljs_ = {count: 0,result: []};
	createnewalljs_ = JSON.stringify(createnewalljs_);
	createnewalljs_ = window.btoa(createnewalljs_);

getallq = localStorage.getItem("quiz")||createnewalljs_;
}
var atoballqj = window.atob(getallq);
var getJSON = JSON.parse(atoballqj);
var results = getJSON.result;
var counts = results.length;
for(var i=0;i<counts;i++){
	var createnewalljs = {count: 0,result: []};
	createnewalljs = JSON.stringify(createnewalljs);
	createnewalljs = window.btoa(createnewalljs);
	setCookie('quiz', createnewalljs, 365);
}
    getdata();

Swal.fire({
  title: 'تم حذفها',
  text: 'تم حذف جميع الإختبارات المخزنة محليًا.',
  icon: 'success',
  confirmButtonColor:'#6c757d',
  confirmButtonText: 'إستمرار',
})



}else{
var idstring = 'q'+id;
localStorage.removeItem(idstring);
var getallq = getCookie("quiz");
if(TeoriaPalMixApp){

	var createnewalljs_ = {count: 0,result: []};
	createnewalljs_ = JSON.stringify(createnewalljs_);
	createnewalljs_ = window.btoa(createnewalljs_);

getallq = localStorage.getItem("quiz")||createnewalljs_;
}
var atoballqj = window.atob(getallq);
var getJSON = JSON.parse(atoballqj);
var resultfilter = getJSON.result;
var deletedata = resultfilter.filter(val => val.id !== id);
var counts = deletedata.length;
	var createnewalljs = {count: counts,result: deletedata};
	createnewalljs = JSON.stringify(createnewalljs);
	createnewalljs = window.btoa(createnewalljs);
	setCookie('quiz', createnewalljs, 365);
    getdata();

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-start',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'تم حذف الإختبار المحدد'
})

}
}


function setnote(text){

if(TeoriaPalMixApp){
ScriptAppWeb.showToast(text)
}else{

toastsNom++;
var setToast = [''];
setToast.push('<div class="toast" role="alert" id="liveToast'+toastsNom+'" aria-live="assertive" aria-atomic="true">');
setToast.push('<div class="toast-header">');
setToast.push('<img src="file/img/site/SidebarLogo.svg" width="30" height="30" class="rounded me-2" alt="PalMix">');
setToast.push('<strong class="me-auto">PalMix</strong>');
setToast.push('<small class="text-muted">الآن</small>');
setToast.push('<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>');
setToast.push('</div>');
setToast.push('<div class="toast-body">');
setToast.push(text);
setToast.push('</div></div>');


$('#alltoast').append(setToast.join(''));
var liveToastEl = $('#liveToast'+toastsNom);
var liveToast = bootstrap.Toast.getOrCreateInstance(liveToastEl)
liveToast.show();
}
}

//set cookie
function setCJ(jsonpush,data,type,quiz_num,trueans){

  if (navigator.cookieEnabled == false) {
    var setalerttext = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>';
    setalerttext +='هــام: '
    setalerttext +='</strong>'
    setalerttext +='يرجى تمكين ملفات تعريف الإرتباط كي تتمكن من الإحتفاظ بالخصائص والإختبارات'
    setalerttext +='<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    setalerttext +='</div>'
    $("#alertSite").html(setalerttext);
  }else{
//durations
var s = $("#quiz-timer").text();
var s1 = s.split(':')[0];
var s2 = s.split(':')[1];
var m1 = parseInt(s1);
var m2 = parseInt(s2);
var g1= 39-m1;
var g2= 59-m2;
var g1s = g1.toString();
var g2s = g2.toString();
if(g1s.length == 1){
g1 = '0'+g1
}
if(g2s.length == 1){
g2 = '0'+g2
}
var durations = g1+':'+g2;
var timenow = new Date();
timenow = timenow.getTime();


var createQID = [];
var numid = Math.floor(Math.random() * 10000);
var gettimenowid = timenow.toString();
var getnumid = numid.toString();
var numidx = gettimenowid + getnumid;
numid = parseInt(numidx);
createQID.push('{\"quiz_ID\":'+quiz_num+',\"num_ID\":'+numid+',\"type\":\"'+type+'\",\"date\":'+timenow+',\"number\":'+data.length+',\"correct_answers\":'+trueans+',\"duration\":\"'+durations+'\",\"result\":['+jsonpush+']}');
var cQID = createQID.join();
localStorage.setItem('q'+numid, cQID);

	var firebasejsonSaveQuizs = window.btoa(cQID);
	if(TeoriaPalMixApp){
	ScriptAppWeb.firebaseSaveQuizs(firebasejsonSaveQuizs,numid.toString(),timenow.toString());
	}else{
	firebaseSaveQuizsWeb(firebasejsonSaveQuizs,numid.toString(),timenow.toString());
	}
//dax



pushHistory("ExamPage",type,quiz_num,"1",numid,false);





var getallq = getCookie("quiz");
if(TeoriaPalMixApp){
	var createnewalljs_ = {count: 0,result: []};
	createnewalljs_ = JSON.stringify(createnewalljs_);
	createnewalljs_ = window.btoa(createnewalljs_);
getallq = localStorage.getItem("quiz")||createnewalljs_;
}

if (getallq.length > 0) {
	var createallq = getallq;
	var createallqj = window.atob(createallq);
	createallqj = JSON.parse(createallqj);
	var counts = createallqj.count + 1;
	var createallqjc = createallqj.result;
	createallqjc.push({id: numid});
	var createnewalljs = {count: counts,result: createallqjc};
	var createnewalljs_ = JSON.stringify(createnewalljs);
	var createnewalljs = window.btoa(createnewalljs_);
	setCookie('quiz', createnewalljs, 365);

} else {
	var createallqjc = [];
	createallqjc.push({id:numid});
	var createnewalljs = {count: 1,result: createallqjc};
	createnewalljs = JSON.stringify(createnewalljs);
	createnewalljs = window.btoa(createnewalljs);
	setCookie('quiz', createnewalljs, 365);
}
setnote('تم الإحتفاظ بنتيجة الإختبار');

getdata(numid);


}
}

function setAlertQuiz(allq,trueans,success,msg){
if (trueans < success) {
Swal.fire({
  icon: 'error',
  title: 'لم تنجح',
  confirmButtonColor: '#299be4',
  confirmButtonText: 'مراجعة الأخطاء',
  html: 'للأسف لم تنجح، علامتك هي <span class="text-danger">'+trueans+' من '+allq+'</span>. تابع بهمة عالية وستتحسن النتائج، ولا تنسى مراجعة الأخطاء.'
})

if(TeoriaPalMixApp){
ScriptAppWeb.sendNotificationQuizs("نتيجة الإختبار","للأسف لم تنجح، علامتك هي "+trueans+" من "+allq+". ")
}


} else if (trueans >= allq) {
Swal.fire({
  icon: 'success',
  title: 'لقد نجحت بامتياز!',
  text: 'عمل رائع، تمت الإجابة عن جميع الأسئلة بالشكل الصحيح.',
  confirmButtonText: 'مراجعة الأسئلة',
  confirmButtonColor: '#198754',
    background: 'url(./file/img/site/sw/b1.jpg)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("./file/img/site/sw/s.gif")
    repeat
  `

});

if(TeoriaPalMixApp){
ScriptAppWeb.sendNotificationQuizs("نتيجة الإختبار","عمل رائع، لقد نجحت بامتياز تمت الإجابة عن جميع الأسئلة بالشكل الصحيح.")
}

			} else if (trueans >= success) {
Swal.fire({
  icon: 'success',
  title: 'لقد نجحت',
  confirmButtonColor: '#299be4',
  confirmButtonText: 'مراجعة الأخطاء',
  html: 'عمل جيد، علامتك هي <span class="text-success">'+trueans+' من '+allq+'</span>. لا تنسى مراجعة الأخطاء.'
});
if(TeoriaPalMixApp){
ScriptAppWeb.sendNotificationQuizs("نتيجة الإختبار","عمل جيد، علامتك هي "+trueans+" من "+allq+".")
}
}
}

function setAllquestions(type,quiz_num){
var typeAr,ic;
if(type == "private"){
typeAr = "خصوصي";
ic = '<i class="fa-solid fa-car-side"></i>';
}else if(type == "truck"){
typeAr = 'شحن خفيف';
ic = '<i class="fa-solid fa-truck"></i>';
}else if(type == "haulage"){
typeAr = "شحن ثقيل"
ic = '<i class="fa-solid fa-truck-container-empty"></i>';
}else if(type == "taxi"){
typeAr = "عمومي"
ic = '<i class="fa-solid fa-taxi-bus"></i>';
}else if(type == "tractor"){
typeAr = "تراكتور"
ic = '<i class="fa-solid fa-tractor"></i>';
}else if(type == "motorcycle"){
typeAr = "دراجة نارية"
ic = '<i class="fa-solid fa-motorcycle"></i>';
}else{
typeAr = type;
ic = '<i class="fa-solid fa-messages-question"></i>';
}



   	$.getJSON("file/all.json", {
		alt: "json"
	}).catch(function(error) {
		console.log("error", error)
	}).done(function(data) {
    var all = data.result;
    for(var i=0;i<all.length;i++){
    var n = 0;
    if(all[i].name == type){
    n = all[i].number;
    $('#titlecardtype').html(ic+' قائمة الإمتحانات ('+typeAr+')')
    var numOwl = 1;
    	for(var s=0;s<n;s++){
        var m = s+1;
        if(quiz_num == m){
        numOwl = m;
        $('#linkqnumber').append('<div class="col text-center"><a class="list-group-item list-group-item-light border rounded-circle p-2 active">'+m+'</a></div>');

		}else if(m == 21 && type == "private"){
          $('#linkqnumber').append('<div class="col text-center"><a title="جديد! إمتحان رقم '+m+' ('+typeAr+')" href="javascript:;" class="list-group-item list-group-item-default list-group-item-action rounded-circle text-center" onclick="startsetHtml(\''+type+'\','+m+',1,0)"><span class="position-absolute noticestyle translate-middle p-2 bg-danger border border-light rounded-circle"><span class="visually-hidden">جديد</span><span class="visually-hidden">unread messages</span></span>'+m+'</a></div>');
        }else if(m == 22 && type == "private"){
          $('#linkqnumber').append('<div class="col text-center"><a title="جديد! إمتحان رقم '+m+' ('+typeAr+')" href="javascript:;" class="list-group-item list-group-item-default list-group-item-action rounded-circle text-center" onclick="startsetHtml(\''+type+'\','+m+',1,0)"><span class="position-absolute noticestyle translate-middle p-2 bg-danger border border-light rounded-circle"><span class="visually-hidden">جديد</span><span class="visually-hidden">unread messages</span></span>'+m+'</a></div>');
        }else{
        $('#linkqnumber').append('<div class="col text-center"><a title="إمتحان رقم '+m+' ('+typeAr+')" href="javascript:;" class="list-group-item list-group-item-default list-group-item-action rounded-circle text-center" onclick="startsetHtml(\''+type+'\','+m+',1,0)">'+m+'</a></div>');
        }

        }
        setOwlOp(numOwl);
    }
    }

    });





    }
function setOwlOp(numOwl){
$('.owl-carousel').owlCarousel({
rtl:true,
    stagePadding:20,
    loop:false,
    autoWidth:true,
    margin:7,
    items:4,
    dots:false,
    nav:true,
    startPosition:numOwl-3,
                responsive: {
                  0: {
                    items: 4
                  },
                  250: {
                    items: 4
                  },
                  350: {
                    items: 7,
                  },
                  450: {
                    items: 9
                  },
                  600: {
                    items: 13
                  },
                  800: {
                    items: 17
                  },
                  1000: {
                    items: 20
                  },
                  1200: {
                    items: 22
                  },
                  1400: {
                    items: 25
                  }
                  }
})
    }


function setFontSize(getfs,thisx){
if(thisx){
$("#fontsize").attr('data-fs',getfs+10);
$("#textsizeques").html(getfs+10);
$("#quiz tr").css('font-size',(getfs+10)+'%');
getfs = getfs+10
}else{
$("#fontsize").attr('data-fs',getfs-10);
$("#textsizeques").html(getfs-10);
$("#quiz tr").css('font-size',(getfs-10)+'%');
getfs = getfs-10
}
if(getfs < 150){
$(".fontsizel").removeClass('disabled');
}else{
$(".fontsizel").addClass('disabled');
}
if(getfs > 80){
$(".fontsizes").removeClass('disabled');
}else{
$(".fontsizes").addClass('disabled');
}

if(getfs == 100){
$("#textsizeques").html('الإفتراضي');
}
if(window.location.hash == "#textSize"){
scrollGoTo($('#quiz'))
}


}


function steps(){
(async () => {

const { value: fruit } = await Swal.fire({
  title: 'حدد نوع الرخصة',
  input: 'select',
  inputOptions: {
      private: 'خصوصي',
      truck: 'شحن خفيف',
      haulage: 'شحن ثقيل',
      trella: 'تريلا',
      taxi: 'تاكسي',
      bus: 'باص'
  },
 confirmButtonColor: '#0d6efd',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: true,
  confirmButtonText:'موافق',
  cancelButtonText:'إلغاء',

  cancelButtonAriaLabel: 'Thumbs down',
  inputPlaceholder: 'حدد نوع الرخصة',
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'private') {
        private(1)
      }else if (value === 'truck') {
        truck(1)
      }else if (value === 'haulage') {
        haulage(1)
      }else if (value === 'trella') {
        trella(1)
      }else if (value === 'taxi') {
        taxi(1)
      }else if (value === 'bus') {
        bus(1)
      }else{
        resolve('يجب إختيار نوع الرخصة')
      }
    })
  }
})



})()

}


function private(num){
var numfrome = ' (7/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i> صورتان شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية</li>'+
'</ul>'+
  'يجب ان لا يقل العمر عن 17 سنة <br/>'+
'يمكن استلام الرخصة بعد عمر 17.5 سنة.';
Swal.fire({
  title: 'الوثائق المطلوبة'+ numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }else if(result.isConfirmed){
private(num-1)
  }
})


}else if(num == 3){

Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }else if(result.isConfirmed){
private(num-1)
  }
})


}else if(num == 4){

Swal.fire({
  title: 'دورة التؤوريا'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد تسليم المعاملة للمدرسة يتم الاتصال بالطالب لإعلامه بموعد دورة التؤوريا والتي تتكون بالعادة من 7 محاضرات وتتناول مواضيع التؤوريا المختلفة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }else if(result.isConfirmed){
private(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد دراسة التؤوريا والتدرب الجيد على امتحانات التؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يتم تعيين امتحان التؤوريا الرسمي في دائرة السير من خلال مدرسة السياقة.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 5 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }else if(result.isConfirmed){
private(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
private(num+1)
  }else if(result.isConfirmed){
private(num-1)
  }
})


}else if(num == 7){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
private(num-1)
  }
})


}






}


function truck(num){
var numfrome = ' (7/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i>  4 صور شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية</li>'+
'</ul>'+
  'يجب ان لا يقل العمر عن 17.5 سنة <br/>'+
'يمكن استلام الرخصة بعد عمر 18 سنة.';
Swal.fire({
  title: 'الوثائق المطلوبة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }else if(result.isConfirmed){
truck(num-1)
  }
})



}else if(num == 3){
Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }else if(result.isConfirmed){
truck(num-1)
  }
})



}else if(num == 4){

Swal.fire({
  title: 'دورة التؤوريا'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد تسليم المعاملة للمدرسة يتم الاتصال بالطالب لإعلامه بموعد دورة التؤوريا والتي تتكون بالعادة من 7 محاضرات وتتناول مواضيع التؤوريا المختلفة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }else if(result.isConfirmed){
truck(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد دراسة التؤوريا والتدرب الجيد على امتحانات التؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يتم تعيين امتحان التؤوريا الرسمي في دائرة السير من خلال مدرسة السياقة.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 5 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }else if(result.isConfirmed){
truck(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
truck(num+1)
  }else if(result.isConfirmed){
truck(num-1)
  }
})


}else if(num == 7){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
truck(num-1)
  }
})


}








}



function haulage(num){
var numfrome = ' (9/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i>  4 صور شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية <br/><span class="fs-6">أن لا يقل العمر عن 19 سنة</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-id-card"></i> صورة عن الرخصة<br/><span class="fs-6">أن تكون سارية المفعول.<br/>أن يكون قد مضى على رخصة الشحن مدة لا تقل عن سنة.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة مدرسية<br/><span class="fs-6">اجتياز الصف الخامس على الأقل.<br/>مصدقة من التربية والتعليم.</span></li>'+
'</ul>';
Swal.fire({
  title: 'الوثائق المطلوبة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})



}else if(num == 3){
Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})



}else if(num == 4){

Swal.fire({
  title: 'التسجيل لدورة شحن ثقيل'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة السير واصطحاب المعاملة بعد ارفاق الفحص الطبي معها للتسجيل لدورة شحن ثقيل المطلوبة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'حضور دورة شحن ثقيل'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان القبول يتم توزيع الطلاب من قبل دائرة السير على كليات التعليم الاستكمالي في المنطقة، ويتم ابلاغ الطالب بموعد بداية الدورة ومكانها والمطالبة بتأكيد التسجيل.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'صدور شهادة الدورة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد انتهاء متطلبات الدورة تصدر الكلية شهادة الدورة، وتكون هذه الشهادة صالحة مدى الحياة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})


}else if(num == 7){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد الحصول على شهادة الدورة، و دراسة التؤوريا والتدرب الجيد على امتحانات التؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يمكن حجز امتحان التؤوريا من خلال مدرسة سياقة.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 5 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})


}else if(num == 8){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
haulage(num+1)
  }else if(result.isConfirmed){
haulage(num-1)
  }
})


}else if(num == 9){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
haulage(num-1)
  }
})


}











}


function trella(num){
var numfrome = ' (6/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i>  4 صور شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file-certificate"></i> شهادة دورة شحن ثقيل </li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية <br/><span class="fs-6">أن لا يقل العمر عن 20 سنة</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-id-card"></i> صورة عن الرخصة<br/><span class="fs-6">أن تكون سارية المفعول.<br/>أن يكون قد مضى على رخصة شحن ثقيل مدة لا تقل عن سنة.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة مدرسية<br/><span class="fs-6">اجتياز الصف الخامس على الأقل.<br/>مصدقة من التربية والتعليم.</span></li>'+
'</ul>';
Swal.fire({
  title: 'الوثائق المطلوبة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
trella(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
trella(num+1)
  }else if(result.isConfirmed){
trella(num-1)
  }
})



}else if(num == 3){
Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
trella(num+1)
  }else if(result.isConfirmed){
trella(num-1)
  }
})


}else if(num == 4){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'امتحان التؤوريا غير مطلوب اذا لم يمضي على امتحان التؤوريا الخاص برخصة الشحن ثقيل مدة تزيد عن 4 سنوات.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
trella(num+1)
  }else if(result.isConfirmed){
trella(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
trella(num+1)
  }else if(result.isConfirmed){
trella(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
trella(num-1)
  }
})


}










}


function taxi(num){
var numfrome = ' (11/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i>  4 صور شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية <br/><span class="fs-6">أن لا يقل العمر عن 21 سنة</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-id-card"></i> صورة عن الرخصة<br/><span class="fs-6">أن تكون سارية المفعول.<br/>أن يكون قد مضى على رخصة الشحن مدة لا تقل عن سنتين.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة مدرسية<br/><span class="fs-6">اجتياز الصف الثاني اعدادي (ثامن) على الأقل.<br/>مصدقة من التربية والتعليم.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة حسن سلوك<br/><span class="fs-6">تصدر من وزارة الداخلية.<br/>تستغرق بالعادة اسبوعين لصدروها.</span></li>'+
'</ul>';
Swal.fire({
  title: 'الوثائق المطلوبة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})



}else if(num == 3){
Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})



}else if(num == 4){

Swal.fire({
  title: 'التسجيل لدورة عمومي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة السير واصطحاب المعاملة بعد ارفاق الفحص الطبي معها للتسجيل لدورة العمومي المطلوبة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'تقديم امتحان القبول'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد التسجيل لدورة العمومي في دائرة السير يتم تحديد امتحان قبول (مجاني) واعلام الطالب بوعده، حيث يحتوي الامتحان على أسئلة بسيطة الهدف الأساسي منها اختبار القدرة على القرائة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'حضور دورة العمومي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان القبول يتم توزيع الطلاب من قبل دائرة السير على كليات التعليم الاستكمالي في المنطقة، ويتم ابلاغ الطالب بموعد بداية الدورة ومكانها والمطالبة بتأكيد التسجيل.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 7){

Swal.fire({
  title: 'تقديم الامتحان الشامل'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد حضور دورة العمومي واجتيازها، يتم تحديد امتحان الشامل (مجانا)، حيث يتكون الامتحان من 30 سؤال موزعة على مادة قانون السير، وسياقة صحيحة، ومعرفة مركبة.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 8 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 8){

Swal.fire({
  title: 'صدور شهادة الدورة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح في الامتحان الشامل يتم اصدار شهادة الدورة من قبل الكلية، وتكون هذه الشهادة صالحة مدى الحياة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 9){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد الحصول على شهادة الدورة، و دراسة التؤوريا والتدرب الجيد على امتحانات التؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يمكن حجز امتحان التؤوريا من خلال مدرسة سياقة، ويكون الامتحان في نفس مادة الامتحان الشامل تقريبا.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 5 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 10){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
taxi(num+1)
  }else if(result.isConfirmed){
taxi(num-1)
  }
})


}else if(num == 11){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
taxi(num-1)
  }
})


}









}



function bus(num){
var numfrome = ' (11/'+num+')';
if(num == 1){
var setText = '<ul class="list-group text-start">'+
  '<li class="list-group-item"><i class="fa-solid fa-square-user"></i>  4 صور شخصية</li>'+
  '<li class="list-group-item"><i class="fa-solid fa-address-card"></i> صورة عن الهوية <br/><span class="fs-6">أن لا يقل العمر عن 21 سنة</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-id-card"></i> صورة عن الرخصة<br/><span class="fs-6">أن تكون سارية المفعول.<br/>أن يكون قد مضى على رخصة الشحن مدة لا تقل عن سنتين.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة مدرسية<br/><span class="fs-6">اجتياز الصف الثاني اعدادي (ثامن) على الأقل.<br/>مصدقة من التربية والتعليم.</span></li>'+
  '<li class="list-group-item"><i class="fa-solid fa-file"></i> شهادة حسن سلوك<br/><span class="fs-6">تصدر من وزارة الداخلية.<br/>تستغرق بالعادة اسبوعين لصدروها.</span></li>'+
'</ul>';
Swal.fire({
  title: 'الوثائق المطلوبة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:setText,
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'تجهيز المعاملة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى مدرسة السياقة واصطحاب الوثائق المطلوبة للقيام بتجهيز المعاملة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})



}else if(num == 3){
Swal.fire({
  title: 'الفحص الطبي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة الصحة واصطحاب المعاملة التي تم تجهيزها في مدرسة السياقة لعمل الفحص الطبي اللازم.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})



}else if(num == 4){

Swal.fire({
  title: 'التسجيل لدورة عمومي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'التوجه الى دائرة السير واصطحاب المعاملة بعد ارفاق الفحص الطبي معها للتسجيل لدورة العمومي المطلوبة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 5){

Swal.fire({
  title: 'تقديم امتحان القبول'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد التسجيل لدورة العمومي في دائرة السير يتم تحديد امتحان قبول (مجاني) واعلام الطالب بوعده، حيث يحتوي الامتحان على أسئلة بسيطة الهدف الأساسي منها اختبار القدرة على القرائة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 6){

Swal.fire({
  title: 'حضور دورة العمومي'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان القبول يتم توزيع الطلاب من قبل دائرة السير على كليات التعليم الاستكمالي في المنطقة، ويتم ابلاغ الطالب بموعد بداية الدورة ومكانها والمطالبة بتأكيد التسجيل.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 7){

Swal.fire({
  title: 'تقديم الامتحان الشامل'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد حضور دورة العمومي واجتيازها، يتم تحديد امتحان الشامل (مجانا)، حيث يتكون الامتحان من 30 سؤال موزعة على مادة قانون السير، وسياقة صحيحة، ومعرفة مركبة.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 8 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 8){

Swal.fire({
  title: 'صدور شهادة الدورة'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح في الامتحان الشامل يتم اصدار شهادة الدورة من قبل الكلية، وتكون هذه الشهادة صالحة مدى الحياة.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 9){

Swal.fire({
  title: 'الامتحان النظري (التؤوريا)'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد الحصول على شهادة الدورة، و دراسة التؤوريا والتدرب الجيد على امتحانات التؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يمكن حجز امتحان التؤوريا من خلال مدرسة سياقة، ويكون الامتحان في نفس مادة الامتحان الشامل تقريبا.<br/><span class="fw-bolder">الحد الأقصى للنجاح في الامتحان هو 5 أخطاء.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 10){

Swal.fire({
  title: 'دروس السياقة العملية'+numfrome,
  icon: 'info',
  iconHtml: num,
  html:'بعد النجاح بامتحان التؤوريا، يتلقى الطالب دروس سياقة عملية لاكتساب المهارات المطلوبة للحصول على الرخصة.<br/><span class="text-black-50">يختلف عدد الدروس من طالب إلى آخر حسب سرعة التعلم.</span>',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
bus(num+1)
  }else if(result.isConfirmed){
bus(num-1)
  }
})


}else if(num == 11){

Swal.fire({
  title: 'الامتحان العملي (التست)'+numfrome,
  icon: 'success',
  html:'بعد اتقان المهارات المطلوبة يتم تحديد موعد الامتحان العملي (التست) من قبل مدرب السياقة. يختبر فاحص السائقين في سلطة الترخيص مهارات الطالب، وفي حال نجاحه في الامتحان يمكنه الحصول على الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
bus(num-1)
  }
})


}









}

function services(num){
if(num == 1){
Swal.fire({
  title: 'الفحص الطبي',
  icon: 'info',
  iconHtml:'<i class="fa-solid fa-stethoscope fs-1"></i>',
  html:'<span class="text-success ff-ar2"><i class="fa-solid fa-location-dot"></i> دائرة الصحة</span><br/>'+
  'الفحص الطبي هو الخطوة الأولى بعد عمل المعاملة في مدرسة السياقة، ويمكن التقدم للفحص الطبي في دائرة الصحة أيام الأحد، الثلاثاء والأربعاء من الساعة 08:00 صباحاً إلى 10:30 صباحاً ويفضل الذهاب مبكراً قدر المستطاع، ويجب عدم تناول الفطور قبل الفحص لطلاب رخصة الشحن وما فوق.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'إنهاء',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
services(num+1)
  }
})
}else if(num == 2){

Swal.fire({
  title: 'الفحص النظري (التؤوريا)',
  icon: 'question',
  iconHtml:'<i class="fa-solid fa-desktop fs-1"></i>',
  html:'<span class="text-success ff-ar2"><i class="fa-solid fa-location-dot"></i> دائرة السير</span><br/>'+
  'بعد دراسة التؤوريا جيداً والتدرب على الامتحانات التدريبية للتؤوريا الموجودة في تطبيقنا أو موقعنا في شبكة PalMix، يمكن التقدم لامتحان التؤوريا الرسمي في أي يوم من الأحد إلى الأربعاء ، وفي اليوم المحدد للامتحان يجب التواجد في الدائرة من الساعة 08:00 صباحاً وانتظار الدور.',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
services(num+1)
  }else if(result.isConfirmed){
services(num-1)
  }
})


}else if(num == 3){

Swal.fire({
  title: 'الفحص العملي (التست)',
  icon: 'warning',
  iconHtml: '<i class="fa-solid fa-car-bus fs-1"></i>',
  html:'<span class="text-success ff-ar2"><i class="fa-solid fa-location-dot"></i> دائرة السير</span><br/>'+
  'الخطوة الأخيرة بعد بعد اتقان المهارات الأساسية في القيادة هي التقدم لللإمتحان العملي في السياقة (التست)، ويمكن التقدم للتست الرسمي في اي يوم من من الأحد إلى الخميس بتعيين مسبق من خلال مدرسة تعليم السياقة، أما بخصوص وقت التست فيتم تحديده مسبقاً (ولا يعتبر موعد دقيق).',
 denyButtonColor: '#0d6efd',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'التالي <i class="fa-solid fa-chevron-left"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
  if (result.isDenied) {
services(num+1)
  }else if(result.isConfirmed){
services(num-1)
  }
})


}else if(num == 4){

Swal.fire({
  title: 'الحصول على الرخصة',
  icon: 'success',
  iconHtml:'<i class="fa-solid fa-address-card fs-1"></i>',
  html:'<span class="text-success ff-ar2"><i class="fa-solid fa-location-dot"></i> دائرة السير</span><br/>'+
  'بعد النجاح بالامتحان العملي (التست) يمكنك الحصول على رخصة السياقة من سلطة الترخيص (دائرة السير) في أي يوم من الأحد إلى الخميس من الساعة 08:00 صباحاً إلى 01:00 مساءً مع ضرورة احضار بطاقة الهوية الشخصية والذهاب شخصياً لاستلام الرخصة.',
 denyButtonColor: '#198754',
 confirmButtonColor: '#6c757d',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  focusDeny: true,
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> السابق',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:'انهاء',
  cancelButtonAriaLabel: 'Thumbs down'
}).then((result) => {
if(result.isConfirmed){
services(num-1)
  }
})


}






}


function lessons(){
var btns='';
btns+='<div class="list-group">';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'private\')"><i class="fa-solid fa-car-side"></i> خصوصي</button>';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'truck\')"><i class="fa-solid fa-truck"></i> شحن خفيف</button>';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'haulage\')"><i class="fa-solid fa-truck-moving"></i> شحن ثقيل</button>';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'trella\')"><i class="fa-solid fa-truck-container"></i> تريلا</button>';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'taxi\')"><i class="fa-solid fa-taxi"></i> تاكسي عمومي</button>';
btns+='<button type="button" class="list-group-item list-group-item-action" onclick="price(\'bus\')"><i class="fa-solid fa-bus"></i> باص عمومي</button>';
btns+='</div>';


Swal.fire({
  title: 'اسعار دروس السياقة',
  icon: 'warning',
  iconHtml:'$',
  html:btns,
  showCloseButton: true,
  showCancelButton: true,
  showConfirmButton: false,
  focusCancel: true,
  cancelButtonText:'إنهاء',
})
}



function price(type){
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var typeAr = type;
var icon = '$';

if(type == "private"){
typeAr = "خصوصي";
icon = '<i class="fa-solid fa-car-side fs-1"></i>';
n1 = 90;
n2 = 290;
n3 = 370;
n4 = 17;

}else if(type == "truck"){
typeAr = "شحن خفيف"
icon = '<i class="fa-solid fa-truck fs-1"></i>';
n1 = 110;
n2 = 350;
n3 = 430;
n4 = 17.5;
}else if(type == "haulage"){
typeAr = "شحن ثقيل"
icon = '<i class="fa-solid fa-truck-moving fs-1"></i>';
n1 = 160;
n2 = 500;
n3 = 580;
n4 = 19;
}else if(type == "trella"){
typeAr = "تريلا"
icon = '<i class="fa-solid fa-truck-container fs-1"></i>';
n1 = 160;
n2 = 500;
n3 = 580;
n4 = 20;
}else if(type == "taxi"){
typeAr = "تاكسي عمومي"
icon = '<i class="fa-solid fa-taxi fs-1"></i>';
n1 = 90;
n2 = 290;
n3 = 370;
n4 = 21;
}else if(type == "bus"){
typeAr = "باص عمومي"
icon = '<i class="fa-solid fa-bus fs-1"></i>';
n1 = 160;
n2 = 500;
n3 = 580;
n4 = 21;
}else{
typeAr = type;
}



Swal.fire({
  title: typeAr,
  icon: 'info',
  iconHtml:icon,
  html:'<table class="table table-hover"><thead><tr></tr></thead><tbody><tr><td>الدرس</td><td class="lh-lg fw-bold">₪ '+n1+'</td></tr><tr> <td>التست الأول</td><td class="lh-lg fw-bold">₪ '+n2+'</td></tr><tr><td>التست الثاني وما بعد</td><td class="lh-lg fw-bold">₪ '+n3+'</td></tr><tr><td>العمر الأدنى</td><td class="lh-lg fw-bold">'+n4+' سنة</td></tr></tbody></table>',
  showCloseButton: true,
  showCancelButton: true,
  showConfirmButton: true,
   denyButtonColor: '#198754',
 confirmButtonColor: '#0d6efd',
   showDenyButton: true,
  denyButtonText:'الحصول على الرخصة',
  focusCancel: true,
  cancelButtonText:'خروج',
  confirmButtonText:'<i class="fa-solid fa-chevron-right"></i> عودة',
}).then((result) => {
  if (result.isConfirmed) {
  lessons()
  } else if (result.isDenied){
if(type == "private"){
private(1);
}else if(type == "truck"){
truck(1);
}else if(type == "haulage"){
haulage(1);
}else if(type == "trella"){
trella(1);
}else if(type == "taxi"){
taxi(1);
}else if(type == "bus"){
bus(1);
}
  }
})
}


function examResult(an,id,timerIntervals,numsearch){

if(window.navigator.onLine){


  var cors_api_url = 'https://corsanywhere.herokuapp.com/';

if(numsearch == 1){
cors_api_url = 'https://corsanywhere.herokuapp.com/';
}else if(numsearch == 2){
cors_api_url = 'https://cors-anywhere.herokuapp.com/';
}else if(numsearch == 3){
cors_api_url = 'https://cors.zimjs.com/';
}


  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        (x.responseText || 'error')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
     x.send(options.data);

  }

  // Bind event
  (function() {


if(an === 1){
      doCORSRequest({
        method: 'POST',
        url: 'https://portal.mot.gov.ps/php-soap/soap_GetResponseDriveExam.php',
        data: 'id_card='+id
      }, function printResult(result) {


try{
var results = JSON.parse(result);
if(undefined != results.result.full_name){


      var resultquizoff = '';
      var dates = results.result.date;
      var drive_exam_result = results.result.drive_exam_result;
      var exam_result = results.result.exam_result;
      var full_name = results.result.full_name;
      var license_degree = results.result.license_degree;
      var needs_examiner = results.result.needs_examiner;
      var pass_degree = results.result.pass_degree;
      var examis = "الإمتحان النظري";


if(needs_examiner == "False"){
needs_examiner = "لا"
}else{
needs_examiner = "نعم"
}
if(drive_exam_result == "Pass"){
drive_exam_result = "ناجح"
}else{
drive_exam_result = "لم تنجح"
}



var setTable = ['<table class="table table-striped">'];
setTable.push('<thead>');
setTable.push('<tr>');
setTable.push('<th class="text-center" scope="col" colspan="2">الإمتحان النظري</th>');
setTable.push('</tr>');
setTable.push('</thead>');
setTable.push('<tbody>');
setTable.push('<tr>');
setTable.push('<td>الإسم</td>');
setTable.push('<td>'+full_name+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>درجة الرخصة</td>');
setTable.push('<td>'+license_degree+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>بحاجة إلى فاحص</td>');
setTable.push('<td>'+needs_examiner+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>تاريخ الإمتحان</td>');
setTable.push('<td>'+dates+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>علامة النجاح</td>');
setTable.push('<td>'+pass_degree+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>نتيجة الإمتحان</td>');
setTable.push('<td><b>'+exam_result+'</b></td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>النتيجة النهائية</td>');
setTable.push('<td><b>'+drive_exam_result+'</b></td>');
setTable.push('</tr>');
setTable.push('</tbody>');
setTable.push('</table>');
resultquizoff = setTable.join('');

try{
soap_GetResponseDriveExam(examis,full_name,license_degree,needs_examiner,dates,pass_degree,exam_result,drive_exam_result,id)
}catch(e){
console.log('Error Firebase: ',e)
}

        }else{
resultquizoff ='<div class="alert alert-primary" role="alert">لا يوجد بيانات</div>';
        }
var icon = '';
if(drive_exam_result == "ناجح"){
icon = 'success'
}else{
icon = 'warning'
}
Swal.fire({
  icon: icon,
  html: resultquizoff,
  cancelButtonText: 'إغلاق',
  showCancelButton: false,
  showCloseButton: true,
  showConfirmButton: false
})
clearInterval(timerIntervals)
}catch(e){

if(numsearch === 1){
examResult(an,id,timerIntervals,2)
}else if(numsearch == 2){
examResult(an,id,timerIntervals,3)
}else{
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "ExamModal";
 $("#modalExam").html('نتيجة إمتحان التؤوريا');
 $("#iframeExam").attr('src','https://portal.mot.gov.ps/drive_exam_check.php');
Swal.close();
}, 1000)

}





}

      });

}else if(an === 2){


      doCORSRequest({
        method: 'POST',
        url: 'https://portal.mot.gov.ps/php-soap/soap_PracticalExam.php',
        data: '_cardId='+id
      }, function printResult(result) {

try{

      var results = JSON.parse(result);

        if(undefined !== results.result.school && "null" !== results.result.school){
         var resultquizoff ='';
      var full_name = results.result.full_name;
      var license_degree = results.result.license_degree;
      var dates = results.result.date;
      var practical_exam_result = results.result.practical_exam_result;
      var school = results.result.school;
      var school = results.result.school;
		var examis = "الإمتحان العملي";
var setTable = ['<table class="table table-striped">'];
setTable.push('<thead>');
setTable.push('<tr>');
setTable.push('<th class="text-center" scope="col" colspan="2">الإمتحان العملي</th>');
setTable.push('</tr>');
setTable.push('</thead>');
setTable.push('<tbody>');
setTable.push('<tr>');
setTable.push('<td>الإسم</td>');
setTable.push('<td>'+full_name+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>إسم المدرسة</td>');
setTable.push('<td>'+school+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>درجة الرخصة</td>');
setTable.push('<td>'+license_degree+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>تاريخ الإمتحان</td>');
setTable.push('<td>'+dates+'</td>');
setTable.push('</tr>');
setTable.push('<tr>');
setTable.push('<td>نتيجة الإمتحان</td>');
setTable.push('<td><b>'+practical_exam_result+'</b></td>');
setTable.push('</tr>');
setTable.push('</tbody>');
setTable.push('</table>');
resultquizoff = setTable.join('');
try{
soap_PracticalExam(examis,full_name,school,license_degree,dates,practical_exam_result,id)
}catch(e){
console.log('Error Firebase: ',e)
}


        }else{
resultquizoff ='<div class="alert alert-primary" role="alert">لا يوجد بيانات</div>';
        }

var icon = '';
if(practical_exam_result == "ناجح"){
icon = 'success'
}else{
icon = 'warning'
}
Swal.fire({
  icon: icon,
  html: resultquizoff,
  cancelButtonText: 'إغلاق',
  showCancelButton: false,
  showCloseButton: true,
  showConfirmButton: false
})
    clearInterval(timerIntervals)
}catch(e){


if(numsearch == 1){
examResult(an,id,timerIntervals,2)
}else if(numsearch == 2){
examResult(an,id,timerIntervals,3)
}else{
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "ExamModal";
$("#modalExam").html('نتيجة الإمتحان العملي');
 $("#iframeExam").attr('src','https://portal.mot.gov.ps/practical_exam_check.php');
Swal.close();
}, 1000)
}




}


      });


    }
  })();


}else{
noInternetConnection('getalls');

}

}


function soap_PracticalExam(examis,full_name,school,license_degree,dates,practical_exam_result,id){
var url = top.location.href;
var title = document.title;
var timenow = new Date().getTime();
timenow = timenow.toString();
if(TeoriaPalMixApp){
ScriptAppWeb.soap_PracticalExam(examis,full_name,school,license_degree,dates,practical_exam_result,id,url,title,timenow);
}else{
var hostnames = top.location.hostname;
var blogStats = new Firebase("https://pmteoria-default-rtdb.firebaseio.com/pages/examis/CARD"+id+"/practical/T"+timenow);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.url = url;
data.hostname = hostnames;
data.id = id;
data.title = title;
data.time = timenow;
data.value = 0;
data.examis = examis;
data.full_name = full_name;
data.school = school;
data.license_degree = license_degree;
data.dates = dates;
data.practical_exam_result = practical_exam_result;
isnew = true;
}
data.value++;
if(isnew){
blogStats.set(data);
}else{
blogStats.child("value").set(data.value);
}

});
}



}


function soap_GetResponseDriveExam(examis,full_name,license_degree,needs_examiner,dates,pass_degree,exam_result,drive_exam_result,id){
var url = top.location.href;

var title = document.title;
var timenow = new Date().getTime();
timenow = timenow.toString();

if(TeoriaPalMixApp){
ScriptAppWeb.soap_GetResponseDriveExam(examis,full_name,license_degree,dates,id,url,title,timenow,pass_degree,exam_result,drive_exam_result,needs_examiner);
}else{
var hostnames = top.location.hostname;

var blogStats = new Firebase("https://pmteoria-default-rtdb.firebaseio.com/pages/examis/CARD"+id+"/theory/T"+timenow);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.url = url;
data.hostname = hostnames;
data.id = id;
data.title = title;
data.time = timenow;
data.value = 0;
data.examis = examis;
data.full_name = full_name;
data.pass_degree = pass_degree;
data.exam_result = exam_result;
data.drive_exam_result = drive_exam_result;
data.license_degree = license_degree;
data.dates = dates;
data.needs_examiner = needs_examiner;
isnew = true;
}
data.value++;
if(isnew){
blogStats.set(data);
}else{
blogStats.child("value").set(data.value);
}

});
}

}



function setb64img(id) {
if(!TeoriaPalMixApp){
try {
var url = id.src;
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      $('#'+id.id).attr('onload',null)
      $('#'+id.id).attr('src',reader.result)
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}catch (error) {
  console.error(error);
}
}
}



function replaceAllLinkHash(){
var getitemsS = $('#container #items').find('.card-footer');
var itembtnhomeS = $('#container .itembtnhome');

var textR,hrefR,textS,itemlink,itemhref;
for(var i=0;i<getitemsS.length;i++){
textR = getitemsS.eq(i).find('a');
    for(var s = 0;s<textR.length;s++){
textS = textR.eq(s);
if(textS.length > 0){
hrefR = textS.attr('href');
hrefR = 'hashchanges(\''+hrefR+'\');return false';
textS.attr('onclick',hrefR);
}
}
}


for(var g=0;g<itembtnhomeS.length;g++){
itemlink = itembtnhomeS.eq(g);
itemhref = itemlink.attr('href');
itemlink.attr('onclick','scrollGoTo(\''+itemhref+'\');return false');
}



}

function getallsx(num,val){
let timerInterval
Swal.fire({
  title: 'نتيجة الإمتحان',
  html: 'جاِرِ البحث  <b></b> الرجاء الإنتظار.',
  timer: 648749,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    examResult(num,val,timerInterval,1)
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {

})
}




function getallsWithTimeout(timeout){
var myTimeout = setTimeout(setgetallsas, timeout);
function setgetallsas() {
getalls()
}
}



function getalls(){
if(window.navigator.onLine){


Swal.fire({
  title: 'أدخل رقم الهوية',
  input: 'number',
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonColor: '#0d6efd',
  denyButtonColor: '#198754',
returnInputValueOnDeny:true,
  confirmButtonText: '<i class="fa-solid fa-magnifying-glass"></i> الإمتحان النظري',
  denyButtonText: '<i class="fa-solid fa-magnifying-glass"></i> الإمتحان العملي'
}).then((result) => {
  if (result.isConfirmed) {
  if(result.value.length > 1){
  getallsx(1,result.value)

}else{
  getalls()
  }
  }else if(result.isDenied) {
  if(result.value.length > 1){
  getallsx(2,result.value)
  }else{
  getalls()
  }
}

})
}else{

noInternetConnection('getalls');


}




}

function noInternetConnection(getfunction){
Swal.fire({
  title: 'غير متصل بالإنترنت!',
  icon: 'warning',
  text: 'يتطلب هذا الإجراء الإتصال بالإنترنت كي نتمكن من الإتصال بخوادمنا.',
  confirmButtonText: 'إعادة المحاولة',
  cancelButtonText: 'إغلاق',
  showCancelButton: true,
  showCloseButton: true
}).then((result) => {
  if (result.isConfirmed) {

  if(getfunction == 'getalls'){
  getalls()
  }


}

})


}

function exammodal(num){
$("#iframeExam").attr('data-num',num);
$("#iframeExam").attr('data-set','1');
}

function setTimeoutAd(adSlotTop,adSlotCenter,adSlotBottom){
let timeoutADS;
let timeoutNum = 0;
function setOutputADS() {
if(typeof googletag == 'object'){
googletag.cmd.push(function() {googletag.display(adSlotTop)});
googletag.cmd.push(function() {googletag.display(adSlotCenter)});
googletag.cmd.push(function() {googletag.display(adSlotBottom)});
clearTimeoutADS();
}else{
timeoutNum++;
if(timeoutNum<10){
delayedADS();
  }else{
  errorLoadAd();
  }
}
}
function delayedADS() {
  timeoutADS = setTimeout(setOutputADS, 1*1000);
  }
function clearTimeoutADS() {
  clearTimeout(timeoutADS);
}


if(!TeoriaPalMixApp){
setOutputADS();
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'js/compiled/compiled.js?=51';
script.async = '';
$('#container').append(script)


}

function errorLoadAd(){
var url = top.location.href;
var title = document.title;
var id = new Date().getTime();
var blogStats = new Firebase("https://pmteoria-default-rtdb.firebaseio.com/pages/errorLoadAds/ID"+id);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.url = url;
data.id = id;
data.title = title;
data.value = 0;
isnew = true;
}
data.value++;
if(isnew){
blogStats.set(data);
}else{
blogStats.child("value").set(data.value);
}
});
}


function pushHistory(page,type,exam,question,view,isback){
var newlink = '?';
if(page){
newlink += 'page='+page;
}
if(type){
newlink += '&type='+type;
}
if(exam){
newlink += '&exam='+exam;
}
if(question){
newlink += '&question='+question;
}
if(view){
newlink += '&view='+view;
}else if(page == 'ExamPage'){
newlink += '&view=0';
}
if(!isback){
history.pushState({page:1,rand:Math.random()},type, newlink);
}

}

function sethtmlsqhome(htmls,title,description,c,o,l,ic,page,_type,_num1,_num2,_ans,pageHash){
var newlink = '?';
if(page){
newlink += 'page='+page;
}
if(_type){
newlink += '&type='+_type;
}
if(_num1){
newlink += '&exam='+_num1;
}
if(_num2){
newlink += '&question='+_num2;
}
if(_ans){
newlink += '&view='+_ans;
}
if(pageHash){
newlink += '#'+pageHash;
}

htmls.push('<div class="col-sm-6 col-xl-3 position-relative">');


if(_type == "private" && _num1 == 21){
	htmls.push('<span class="position-absolute noticestyle2 translate-middle badge rounded-pill bg-danger">');
    htmls.push('جديد');
    htmls.push('<span class="visually-hidden">جديد</span></span>');
}else if(_type == "private" && _num1 == 22){
	htmls.push('<span class="position-absolute noticestyle2 translate-middle badge rounded-pill bg-danger">');
    htmls.push('جديد');
    htmls.push('<span class="visually-hidden">جديد</span></span>');
}
htmls.push('<a href="'+newlink+'" class="d-flex justify-content-center align-items-center splash-'+c+' ripple p-4 bg-'+c+' bg-opacity-'+o+' rounded-3 itembtnhome" onclick="'+l+';return false">');

htmls.push('<span class="display-6 lh-1 text-'+c+' mb-0"><i class="'+ic+'"></i></span>');
htmls.push('<div class="ms-4 h6 fw-normal mb-0">');
htmls.push('<div class="d-flex">');
htmls.push('<h5 class="mb-1 h5 fw-bold text-dark">'+title+'</h5>');
htmls.push('</div>');
htmls.push('<p class="mb-0 fs-6 text-secondary">'+description+'</p>');
htmls.push('</div>');
htmls.push('</a>');
htmls.push('</div>');



}
function setitemsLinks(itemsLink,title,d,c,o,l,num){
itemsLink.push('<div class="col-sm-6 col-xl-3">');
itemsLink.push('<a class="d-flex justify-content-center align-items-centerp-4 splash-'+c+' ripple p-4 bg-'+c+' bg-opacity-'+o+' rounded-3 itembtnhome" id="link-'+l+'" href="#'+l+'">');
itemsLink.push('<span class="display-6 lh-1 text-'+c+' mb-0">'+num+'</span>');
itemsLink.push('<div class="ms-4 h6 fw-normal mb-0">');
itemsLink.push('<div class="d-flex">');
itemsLink.push('<h5 class="mb-1 h5 fw-bold text-dark">'+title+'</h5>');
itemsLink.push('</div>');
itemsLink.push('<p class="mb-0 fs-6 text-secondary">'+d+'</p>');
itemsLink.push('</div>');
itemsLink.push('</a>');
itemsLink.push('</div>');
}




function hashchanges(id) {
let urlParam = id;
if(getPage('page')=='signalsPage'){
$(urlParam).removeClass('bg-signals-default-back');
$(urlParam).addClass('bg-signals-default');
scrollGoTo(id);
setTimeout(() => {
$(urlParam).removeClass('bg-signals-default');
$(urlParam).addClass('bg-signals-default-back');
}, 2000)
}





}


function getPage(page) {
var pages = page;
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
pages = params.page;
return pages;
}





function showPage(isback) {

var gettheme = getCookie('theme');

if(TeoriaPalMixApp){
 gettheme = localStorage.getItem("theme")||"purple";
}


if(gettheme.length>1 && typeof gettheme == 'string'){
setSiteColor(gettheme)
if(TeoriaPalMixApp){
ScriptAppWeb.setColorThame(gettheme);
}
}else{
setSiteColor('purple')
}


  document.getElementById("loaderHome").style.display = "none";
  document.getElementById("palmix").style.opacity = "1";



var page = $.query.get("page");
var type = $.query.get("type");
var exam = $.query.get("exam");
var question = $.query.get("question");
var view = $.query.get("view");

if(isback){
var params = (new URL(window.location)).searchParams;
 page = params.get('page');
 type = params.get('type');
 exam = params.get('exam');
 question = params.get('question');
 view = params.get('view');
}




if (page == 'ExamPage') {
        if (type != 'private' && type != 'truck' && type != 'haulage' && type != 'taxi' && type != 'tractor' && type != 'motorcycle') {
                sethtmlcontainer('AllExamsPage',isback)
                return false;
        }
        if (exam > 0) {
                if (isNaN(exam)) {
                        exam = 1
                }
        } else {
                exam = 1;
        }
        if (question > 0) {
                if (isNaN(question)) {
                        question = 1
                } else if (question > 30) {
                        question = 1
                }
        } else {
                question = 1;
        }
        if (view > 0) {
                if (isNaN(question)) {
                        view = 0
                }
        } else {
                view = 0;
        }
        startsetHtml(type,exam,question,view,isback)
} else if(page == 'TrafficLawPage'||page == 'managerPage'||page == 'userProfilePage'||page == 'privacy'||page == 'ProgramPDF'||page == 'signalsPage'||page == 'HomePage'||page == 'tableUserPage'||page == 'AllExamsPage'||page == 'ContactUsPage'||page == 'private'||page == 'truck'||page == 'haulage'||page == 'taxi'||page == 'tractor'||page == 'motorcycle'){


        sethtmlcontainer(page,isback)




setSelectertheme();
} else {
sethtmlcontainer('HomePage')

//sethtmlcontainer('signalsPage',isback)




//startsetHtml('private',16,1,0)
setSelectertheme();
}


if(TeoriaPalMixApp){
ScriptAppWeb.onloadWeb();
swalis();
}



}

function navbarScroll(){
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if(!TeoriaPalMixApp){
  if (currentScrollPos>70) {
    document.getElementById("btnOffcanvas").style.opacity = "1";
    document.getElementById("btnOffcanvas").style.zIndex = "3";

    document.getElementById("btnToTop").style.opacity = "1";
    document.getElementById("btnToTop").style.zIndex = "3";
  } else {
    document.getElementById("btnOffcanvas").style.opacity = "0";
    document.getElementById("btnOffcanvas").style.zIndex = "-1";

    document.getElementById("btnToTop").style.opacity = "0";
    document.getElementById("btnToTop").style.zIndex = "-1";
  }

   }else{
   if (currentScrollPos>2000) {
      ScriptAppWeb.showBtnTop()
  }else{
      ScriptAppWeb.hideBtnTop()
      }
}

  prevScrollpos = currentScrollPos;
}
}



  function audPlayPause(id,name) {

    var audioId = 'audio'+id+'-'+name;
    var audiobtn = 'btnaudio'+id+'-'+name;
    var daudioId = document.getElementById(audioId);
    var audioId_I = $('#'+audiobtn+' i');
    var audioId_classI = $('.btnaudio i');

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
      audioId_classI.eq(i).removeClass('fa fa-pause');
      audioId_classI.eq(i).addClass('fa fa-play');
      audios[i].currentTime=0;
        }
    }
}, true);









    if (daudioId.paused) {
      audioId_I.removeClass('fa fa-play');
      audioId_I.addClass('fa fa-pause');
      daudioId.play();
    } else {
      audioId_I.removeClass('fa fa-pause');
      audioId_I.addClass('fa fa-play');
      daudioId.pause();
      daudioId.currentTime=0;
   }

   daudioId.onended = function() {
      audioId_I.removeClass('fa fa-pause');
      audioId_I.addClass('fa fa-play');
      daudioId.currentTime=0;
	};


 }


	function TouchToLeft(){

			if(window.location.hash != "#sidebarLink") {
				ScriptAppWeb.startonweb(100);


window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "sidebarLink";
}, 200)


				}

	}

	function TouchToRight(){
		if(window.location.hash == "#sidebarLink") {
				ScriptAppWeb.startonweb(100);

setTimeout(() => {
window.location.hash = "ExitModal";
}, 200)

		}


	}


	function TouchToTop(){
			//$('#UserSidebar').offcanvas('show');
	}

	function TouchToBottom(){
			//$('#UserSidebar').offcanvas('hide');
	}

window.addEventListener('popstate', (event) => {
setTimeout(() => {

    if(window.location.hash) {
            var hash = window.location.hash;
            if(hash == '#ExamModal'){
            new bootstrap.Modal($('#ExamModal')).show();
                        if(TeoriaPalMixApp){
                        ScriptAppWeb.hideBtnMenu();
                        }
            }else if(hash == '#CoursesModal'){
            new bootstrap.Modal($('#CoursesModal')).show();
                        if(TeoriaPalMixApp){
                        ScriptAppWeb.hideBtnMenu();
                        }
            }else if(hash == '#sidebarLink'){
            new bootstrap.Offcanvas($('#sidebarLink')).show();
            if(TeoriaPalMixApp){
            ScriptAppWeb.hideBtnMenu();
            }

             if(scrollY == 0){
              window.scrollTo(0, 1);
             }
            }else if(hash == '#textSize'){
            new bootstrap.Offcanvas($('#text-size-quiz')).show();
                        if(TeoriaPalMixApp){
                        ScriptAppWeb.hideBtnMenu();
                        }
            }else{
            $("#ExamModal").modal('hide');
            $("#CoursesModal").modal('hide');
            $("#sidebarLink").offcanvas('hide');
            $("#text-size-quiz").offcanvas('hide');


            if(TeoriaPalMixApp){
            ScriptAppWeb.showBtnMenu();
            }
            }

          //  console.log(hash);
    }else{
     $("#ExamModal").modal('hide');
     $("#CoursesModal").modal('hide');
    showPage(true)
            if(TeoriaPalMixApp){
            ScriptAppWeb.showBtnMenu();
            }
    }


}, 200)
});




function setCookie(cname, cvalue, exdays) {


if(TeoriaPalMixApp){
localStorage.setItem(cname, cvalue);

}else{
const d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
let expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


}


function btnsidebarLink(){
if(window.location.hash != "#sidebarLink"){
$('#btnOffcanvas').click();
}else{
window.location.hash = "ExitModal";
}

}

function scrollgototop(){
scrollGoTo('#palmix');
}



function btnfontsizequiz(){
if(window.location.hash == "#textSize"){
window.location.hash = "ExitModal";
}else{
window.location.hash = "ExitModal";
setTimeout(() => {
window.location.hash = "textSize";
scrollGoTo($('#quiz'))
}, 200)

}

}


function sendQuizFromApp(){
$('#sendAnswers').click();
}


function showingFullScreenAds(){
if(TeoriaPalMixApp){
ScriptAppWeb.setFullScreenAds()
}
}



  function setcdnScript(){



if(window.navigator.onLine){
if(!TeoriaPalMixApp){
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.firebase.com/js/client/2.4.2/firebase.js';
script.async = '';
document.head.appendChild(script);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
script.async = '';
document.head.appendChild(script);
}
}
    }

function swalis(){
if(TeoriaPalMixApp){
var hash = window.location.hash;


if(Swal.isVisible() || hash == '#ExamModal' || hash == '#CoursesModal' || hash == '#sidebarLink' || hash == '#textSize'){
ScriptAppWeb.hideBtnMenu();
}else{
ScriptAppWeb.showBtnMenu();
}




setTimeout(() => {
  swalis();

}, 1000)
}

}


function firebaseSaveQuizsWeb(jsonFile,numid,timenow){
var hostnames = top.location.hostname;
var blogStats = new Firebase("https://pmteoria-default-rtdb.firebaseio.com/quiz/q"+numid);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.hostname = hostnames;
data.id = numid;
data.time = timenow;
data.jsonFile = jsonFile;
data.version = "Web App";
data.model = navigator.userAgent;
isnew = true;
}
if(isnew){
blogStats.set(data);
}

});

}



const getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    }
  });
}




 function setUserProfileWeb(FirstName,LastName,FullName,Email,Id,MiddleName,profilePic,loginWith,manager,model){


localStorage.setItem("FirstName", FirstName);
localStorage.setItem("LastName", LastName);
localStorage.setItem("FullName", FullName);
localStorage.setItem("Email", Email);
localStorage.setItem("Id", Id);
localStorage.setItem("MiddleName", MiddleName);
localStorage.setItem("profilePic", profilePic);
localStorage.setItem("loginWith", loginWith);
localStorage.setItem("manager", manager);
localStorage.setItem("model", model);


getBase64FromUrl(profilePic).then(function(recosts) {
localStorage.setItem("profilePic64", recosts);
})


 }



function goToUserProfile(){
sethtmlcontainer('userProfilePage');
}





//profile
 function getQuiz(id,quizis,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model){
     $.getJSON("https://pmteoria-default-rtdb.firebaseio.com/quiz/"+id+".json", {
         }).catch(function(error) {

    }).done(function(recosts) {
    if(recosts != null){
   var userId = recosts.userId;

    if(userId == UserId){
        TotalExams++;


    var FullName = recosts.FullName;
    var host = recosts.host;
    var id = recosts.id;
    var jsonFile = window.atob(recosts.jsonFile);
    var model = recosts.model;
    var time = recosts.time;
    var version = recosts.version;



var getJsonFile = JSON.parse(jsonFile);
var correct_answers = getJsonFile.correct_answers;
correct_answers = parseInt(correct_answers)



    if(correct_answers >= 25){
    Allcorrect_answers++;
    }



var getTotalExamsFalse = Math.abs(Allcorrect_answers - TotalExams);


	var useransd = TotalExams - getTotalExamsFalse;
    var present = ((useransd / TotalExams) * 100 >> 0);







$("#SuccessfulExams").html(Allcorrect_answers);
$("#TotalExams").html(TotalExams);
$("#Successfulpercent").html(present+"%");

setAllQuizTableSarver(jsonFile,TotalExams,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model);




    }


    if(TotalExams == 0){
    $('#table_noquiz span').html('لم نعثر على إختبارات مسجلة لحسابك في خوادمنا');
    $('#table_quiz_saver').addClass('d-none');
    $('#table_noquiz').removeClass('d-none');
    }else{
    $('#table_quiz_saver').removeClass('d-none');
    $('#table_noquiz').addClass('d-none');
    }


    }

 });
  }

 function startGetQuiz(FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model){
 if(window.navigator.onLine){

 if(TeoriaPalMixApp){
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.firebase.com/js/client/2.4.2/firebase.js';
document.head.appendChild(script);
 }





  $.getJSON("https://pmteoria-default-rtdb.firebaseio.com/.json", {

    }).catch(function(error) {

$('#table_quiz_saver').addClass('d-none');
$('#table_noquiz').removeClass('d-none');
$('#table_noquiz span').html('حدث خطأ! يرجى المحاولة لاحقًا أو الإتصال بالدعم');


}).done(function(recosts) {

getUserSetting(recosts,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model)





});

}else{
$('#table_quiz_saver').addClass('d-none');
$('#table_noquiz').removeClass('d-none');
$('#table_noquiz span').html('يتطلب إظهار إحصائيات إختباراتك <b>الإتصال بالإنترنت</b>');
}
}

function getInfoUser(id){
$.getJSON("https://pmteoria-default-rtdb.firebaseio.com/User/ID"+id+".json", {
         }).catch(function(error) {

    }).done(function(recosts) {
    var userFullName = recosts.profile.FullName;
    var userSetting = recosts.setting;
var nickname = null;
var shareName = null;
var userNickname = null;
var FullName = null;
if(!userSetting){
nickname = userFullName;
shareName = true;
}else{
nickname = recosts.setting.nickname
shareName = recosts.setting.shareName;
}


$('#checkedUserShareName').prop('checked',shareName);

if(shareName){
$('#inputUserShareName').attr("disabled",false);
}else{
$('#inputUserShareName').attr("disabled",true);
$('#checkedUsernote').removeClass("d-none");
}

$("#inputUserShareName").val(nickname);
$("#UserShareName").text(nickname);


});
}

function getUserSetting(recosts,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model){
if(recosts != null){
getInfoUser(UserId);

//quizs
 var getRecosts = recosts.quiz;
 var reLangth = Object.keys(getRecosts).length;
 for(var i=0;i<reLangth;i++){
 var obj = Object.keys(getRecosts)[i];
getQuiz(obj,recosts.quiz,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model);

 }
}
}


function setAllQuizTableSarver(createallqj,QuizNumper,FirstName,LastName,FullName,Email,UserId,MiddleName,profilePic,profilePic64,loginWith,model){


var p1 = [''];


var correct_answers,duration,num_ID,number,quiz_ID,type,dates,resultQuiz,year,month,date,theTime,theDate,active,viewquiz,typeAr,hours12,textcolor,l10;

active = '';
l10 = 0;


var dataStorage = JSON.parse(createallqj);


correct_answers = dataStorage.correct_answers;
duration = dataStorage.duration;
num_ID = dataStorage.num_ID;
number = dataStorage.number;
quiz_ID = dataStorage.quiz_ID;
type = dataStorage.type;
dates = dataStorage.date;

if(correct_answers == 30){
resultQuiz = '<i class="fa-solid fa-trophy-star text-success" title="ناجح بامتياز"></i>'
textcolor = 'text-success';
}else if(correct_answers >= 25){
resultQuiz = '<i class="fa-solid fa-face-smile text-success" title="ناجح"></i>'
textcolor = 'text-success';
}else{
resultQuiz = '<i class="fa-solid fa-face-frown text-danger" title="لم تنجح"></i>';
textcolor = 'text-danger';
}

var setDate = new Date(dates);

year = setDate.getFullYear();
month = setDate.getMonth() + 1;
date = setDate.getDate();
hours12 = formatAMPM(setDate);

theDate = year+'/'+month+'/'+date;
theTime = hours12;






if(type == "private"){
typeAr = "خصوصي"
}else if(type == "truck"){
typeAr = "شحن خفيف"
}else if(type == "haulage"){
typeAr = "شحن ثقيل"
}else if(type == "taxi"){
typeAr = "عمومي"
}else if(type == "tractor"){
typeAr = "تراكتور"
}else if(type == "motorcycle"){
typeAr = "دراجة نارية"
}else{
typeAr = type;
}





p1.push('<tr class="'+active+'">');
p1.push('<td>'+QuizNumper+'</td>');
p1.push('<td class="t_type"><a onclick="sethtmlcontainer(\''+type+'\');return false" href="?page='+type+'">'+typeAr+'</a></td>');
p1.push('<td class="t_idQuiz"><a onclick="startsetHtml(\''+type+'\','+quiz_ID+',1,1)" href="javascript:;">'+quiz_ID+'</a></td>');
p1.push('<td class="t_date" title="تاريخ الإمتحان '+theDate+' - '+theTime+'">'+theDate+'</td>');
p1.push('<td class="t_duration">'+duration+'</td>');
p1.push('<td class="t_mark '+textcolor+'">'+number+'/'+correct_answers+'</td>');
p1.push('<td>'+resultQuiz+'</td>');
p1.push('<td>');
p1.push('<a onclick="startsetHtml(\''+type+'\','+quiz_ID+',1,'+num_ID+')" href="javascript:;" class="viewquiz '+viewquiz+'" title="مراجعة الإمتحان" data-toggle="tooltip"><i class="fa-solid fa-eye"></i></a>');
p1.push('</td>');
p1.push('</tr>');



averagemarksNum++;
averagemarks += correct_answers;
var setaveragemarks = Math.round(averagemarks/averagemarksNum);

$("#averageMarks").html(setaveragemarks+"/30");



$("#tableSetAll").append(p1.join())







}

function saveMySetting(){
 if(window.navigator.onLine){
 $('#btnsaveMySetting').attr("disabled",true);
 $('#btnsaveMySetting').html('حفــظ <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
$('#checkedUserAlert').addClass("d-none");

 var s1 = $('#checkedUserShareName').is(':checked');
 var s2 = $('#inputUserShareName').val();

 var tests2 = s2.replace(/ /g,"")

 var s2_length = tests2.length;
 var uId = localStorage.getItem("Id");




 if(s2_length < 2 && s1==true){
 $('#btnsaveMySetting').attr("disabled",false);
 $('#btnsaveMySetting').html('حفــظ');
 $('#checkedUserAlert').html('الإسم قصير جدًا، الرجاء إختيار إسم من حرفين أو أكثر').removeClass("d-none");
}else if(s2_length > 32 && s1==true){

 $('#btnsaveMySetting').attr("disabled",false);
 $('#btnsaveMySetting').html('حفــظ');

 $('#checkedUserAlert').html('الإسم طويل جدًا، الرجاء إختيار إسم من 32 حرف أو أقل').removeClass("d-none");



 }else{

var blogStats = new Firebase("https://pmteoria-default-rtdb.firebaseio.com/User/ID"+uId+"/setting");
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};



data.shareName = s1;
data.nickname = s2;

isnew = true;
}
if(isnew){
blogStats.set(data);
}else{
blogStats.set(data);
blogStats.child("shareName").set(s1);
blogStats.child("nickname").set(s2);
}


 $('#btnsaveMySetting').attr("disabled",false);
 $('#btnsaveMySetting').html('حفــظ');

});

 }


 }else{
 $('#btnsaveMySetting').attr("disabled",false);
 $('#btnsaveMySetting').html('حفــظ');
  $('#checkedUserAlert').html('يرجى التحقق من إتصالك بالإنترنت').removeClass("d-none");
}



}

function checkedUser(){
 if ($('#checkedUserShareName').is(':checked')) {
$('#inputUserShareName').attr("disabled",false);
$('#checkedUsernote').addClass("d-none");
}else{
$('#inputUserShareName').attr("disabled",true);
$('#checkedUsernote').removeClass("d-none");
}
}

function logoutUsers(){
if(TeoriaPalMixApp){
ScriptAppWeb.logoutUser();
}
}

function onLogoutpage(){
sethtmlcontainer('HomePage');
localStorage.removeItem("FirstName");
localStorage.removeItem("LastName");
localStorage.removeItem("FullName");
localStorage.removeItem("Email");
localStorage.removeItem("Id");
localStorage.removeItem("MiddleName");
localStorage.removeItem("profilePic");
localStorage.removeItem("loginWith");
localStorage.removeItem("manager");
localStorage.removeItem("model");



}

//profile







function goToManagerPage(){
sethtmlcontainer('managerPage');
}











