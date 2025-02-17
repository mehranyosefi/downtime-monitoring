export default defineNuxtRouteMiddleware((to, from) => {
  const localePath = useLocalePath();
  const sessions = useCookie("sessions");
  if (sessions.value) return navigateTo(localePath("index"));
});
