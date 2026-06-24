const data = require('./data');

async function routes(fastify) {

  fastify.get('/items', async () => {
    return data.getAll();
  });

  fastify.get('/items/:id', async (req, reply) => {
    return data.getById(req.params.id) || reply.code(404).send({ message: 'Not found' });
  });

  fastify.post('/items', async (req) => {
    const item = { id: Date.now().toString(), ...req.body };
    return data.create(item);
  });

  fastify.put('/items/:id', async (req, reply) => {
    const updated = data.update(req.params.id, req.body);
    if (!updated) return reply.code(404).send({ message: 'Not found' });
    return updated;
  });

  fastify.delete('/items/:id', async (req, reply) => {
    const removed = data.remove(req.params.id);
    if (!removed) return reply.code(404).send({ message: 'Not found' });
    return { success: true };
  });

}

module.exports = routes;
