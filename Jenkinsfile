kind: Deployment
apiVersion: extensions/v1beta1
metadata:
  labels:
    app: trade-sc-webapp
  name: trade-sc-webapp
  namespace: dev
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: trade-sc-webapp
    spec:
      containers:
      - name: trade-sc-webapp
        image: gcr.io/strix-co-kr/trade-sc-webapp
        imagePullPolicy: Always
---
kind: Service
apiVersion: v1
metadata:
  labels:
    app: trade-sc-webapp
  name: trade-sc-webapp
  namespace: dev
spec:
  type: ClusterIP
  sessionAffinity: None
  selector:
    app: trade-sc-webapp
  ports:
  - port: 80
    targetPort: 8081
    protocol: TCP
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/tls-acme: "true"
  labels:
    app: trade-sc-webapp
  name: trade-sc-webapp
  namespace: dev
spec:
  rules:
  - host: sc.trade.dev.strix.co.kr
    http:
      paths:
      - backend:
          serviceName: trade-sc-webapp
          servicePort: 80
        path: /
  tls:
  - hosts:
    - sc.trade.dev.strix.co.kr
    secretName: trade-sc-webapp-tls
