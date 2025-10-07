function NotificationItem({ message, is_read }) {
  return (
    <div
      className={`p-3 mb-2 rounded-lg ${
        is_read ? "bg-gray-200" : "bg-yellow-100 font-semibold"
      }`}
    >
      {message}
    </div>
  );
}

export default NotificationItem;
