import { http } from './httpService';

export const generateReportForPack = (data) => {
    return http.post("/admin/generate-report-for-pack", data)
}

export const generateReportForCycle = (data) => {
    return http.post("/admin/generate-report-for-cycle", data)
}

export const getAllReports = () => {
    return http.get("/admin/report/list")
}


export const editReport = (id, data) => {
    return http.put(`/admin/report/edit/${id}`, data)
}
