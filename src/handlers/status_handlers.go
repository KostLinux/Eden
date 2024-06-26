package handlers

import (
	"net/http"
	"web/src/model"

	"github.com/gin-gonic/gin"
)

func checkServiceStatus(service model.ServiceInfo) map[string]string {
	resp, err := http.Get(service.URL)
	status := map[string]string{
		"name": service.Name,
	}

	if err != nil {
		status["status"] = "down"
	} else {
		defer resp.Body.Close()
		if resp.StatusCode == http.StatusOK {
			status["status"] = "up"
		} else {
			status["status"] = "down"
		}
	}

	return status
}

func ReviewServiceStatus(services []model.ServiceInfo) []map[string]string {
	statuses := make([]map[string]string, 0)
	for _, service := range services {
		status := checkServiceStatus(service)
		statuses = append(statuses, status)
	}
	return statuses
}

func StatusHandler(env model.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		urlPrefix := "http://"

		if env.ForceSSL == "true" {
			urlPrefix = "https://"
		}

		services := []model.ServiceInfo{
			{Name: "API", URL: urlPrefix + env.AppHost + ":" + env.AppPort + env.APIPath + "ping"},
			{Name: "Users", URL: urlPrefix + env.AppHost + ":" + env.AppPort + env.APIPath + "users"},
		}

		statuses := ReviewServiceStatus(services)

		c.HTML(http.StatusOK, "status.html", gin.H{
			"services": statuses,
		})
	}
}
