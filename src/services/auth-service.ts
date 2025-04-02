import apiClient from "../config/api-client";
import { Profile } from "../model/Profile";

export const createPRofile = (profile: Profile) => {
    return apiClient.post<Profile>("/register", profile);
}