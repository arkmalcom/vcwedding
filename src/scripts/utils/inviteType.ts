function getInviteTypeFromURL(): string {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("invite_type") || "";
}

export { getInviteTypeFromURL };
