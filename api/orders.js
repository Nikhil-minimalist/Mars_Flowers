const orders = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const order = {
      id: 'ORD-' + Date.now(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      message: req.body.message || '',
      items: req.body.items,
      total: req.body.total,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    orders.push(order);
    return res.status(200).json({ success: true, orderId: order.id });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ orders });
  }

  if (req.method === 'PUT') {
    const { orderId, status } = req.body;
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      return res.status(200).json({ success: true });
    }
    return res.status(404).json({ error: 'Order not found' });
  }
}
