1. nếu các service đều có user define network với nhau, thì docker compose sẽ ko tạo default network(1 network mặc định kiểu host)
2. nếu có ít nhất 1 service ko có network, docker compose sẽ tạo default network(1 network mặc định kiểu host)
3. 2 service giao tiếp với nhau qua 1 network thì phải định nghĩa network ở cả 2 service



các câu hỏi đặt ra sau session là:
câu hỏi, khi chạy một service có nhiều container giống nhau, thì load balance giữa các container ntn? Khi 1 pod chết thì làm gì để thay thế? Định nghĩa "chết": liveness, readiness
các service nằm ở nhiều máy khác nhau, vậy làm sao chúng nói chuyện được với nhau?  