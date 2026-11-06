const { createClient } = require('bedrock-protocol')

const client = createClient({
  host: 'papu131tbp.aternos.me',
  port: 19132,
  username: 'BotAFK',
  offline: true,
  version:'1.26.62.1',
})

client.on('join', () => {
  console.log('Bot conectado!')
  setInterval(() => {
    client.write('player_auth_input', {
      pitch: 0,
      yaw: Math.random() * 360,
      position: client.entity.position,
      move_vector: { x: 0, z: 0 },
      head_yaw: 0,
      input_data: { _value: 0n },
      input_mode: 'mouse',
      play_mode: 'normal',
      interaction_model: 'touch',
      gaze_direction: undefined,
      tick: 0n,
      delta: { x: 0, y: 0, z: 0 },
      transaction: { type: 'normal', data: { action_type: 'normal', actions: [] } },
      item_interaction_attempt: null,
      item_interaction_with_block: 0,
      block_action: []
    })
  }, 5000)
})

client.on('disconnect', (reason) => {
  console.log('Desconectado:', reason)
})
