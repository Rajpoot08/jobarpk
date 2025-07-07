import Router from "express";
import { adminAuth } from "../server.js";
// import routes functions
import { 
    jobs_route,
    admin_route,
    job_post_route,
    job_search_route,
    job_view_route,
    contact_route,
    about_route,
    notify_route,
    admin_post_route,
    admin_update_route,
    admin_post_post_route,
     admin_post_update_route,
     admin_post_delete_route,
     admin_login_route,
     admin_login_post_route,
     contact_post_route,
     job_post_post_route,
     notify_post_route,
     admin_jobpost_delete_route,
     admin_notify_delete_route,
     admin_contact_delete_route
 } from "../controllers/route_controller.js";
const router = Router();

router.get("/", jobs_route);
router.get("/admin_pannel", adminAuth, admin_route);
router.get("/post_job", job_post_route);
router.get("/admin_post", adminAuth, admin_post_route);
router.get("/admin_update/:id", adminAuth, admin_update_route);
router.get("/search", job_search_route);
router.get("/job_details/:id", job_view_route);
router.get("/contact",  contact_route);
router.get("/about_us", about_route);
router.get("/notify", notify_route);
router.get("/admin_login",admin_login_route);
// user post 
router.post("/notify", notify_post_route);
router.post("/post_job", job_post_post_route);
router.post("/contact",  contact_post_route);

// DB
router.post("/admin_post", adminAuth, admin_post_post_route);
router.post("/admin_update", adminAuth, admin_post_update_route);
router.get("/admin_delete/:id", adminAuth, admin_post_delete_route);
router.get("/admin_delete/contact/:id", adminAuth,admin_contact_delete_route);
router.get("/admin_delete/jobpost/:id", adminAuth, admin_jobpost_delete_route);
router.get("/admin_delete/notify/:id", adminAuth, admin_notify_delete_route);
router.post("/admin_login", admin_login_post_route);

export default router;