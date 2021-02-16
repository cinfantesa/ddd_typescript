import {onShutdown} from 'node-graceful-shutdown';
import {disconnect} from './persistence/mongoose.configuration';

const stop = async () => {
  await disconnect();
}

onShutdown(stop);