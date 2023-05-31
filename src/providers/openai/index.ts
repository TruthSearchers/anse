import {
  handlePrompt,
  handleRapidPrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
  const provider: Provider = {
    id: 'provider-openai',
    icon: 'favicon.ico', // @unocss-include
    name: 'Project Kai',
    globalSettings: [
      {
        key: 'apiKey',
        name: 'API Key',
        type: 'api-key',
      },
      {
        key: 'baseUrl',
        name: 'Base URL',
        description: 'Custom base url for Project Kai API.',
        type: 'input',
        default: 'https://www.theprojectkai.com',
      },
      {
        key: 'model',
        name: 'Project Kai model',
        description: 'Custom gpt model for Project Kai API.',
        type: 'select',
        options: [
          { value: 'gpt-3.5-turbo', label: 'model1' },
          { value: 'gpt-4', label: 'model2' },
          { value: 'gpt-4-0314', label: 'model3' },
          { value: 'gpt-4-32k', label: 'model4' },
          { value: 'gpt-4-32k-0314', label: 'model5' },
          { value: 'gpt-3.5-turbo-0301', label: 'model6' },
        ],
        default: 'gpt-3.5-turbo',
      },
      {
        key: 'maxTokens',
        name: 'Max Tokens',
        description: 'The maximum number of tokens to generate in the completion.',
        type: 'slider',
        min: 0,
        max: 32768,
        default: 2048,
        step: 1,
      },
      {
        key: 'temperature',
        name: 'Temperature',
        type: 'slider',
        description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
        min: 0,
        max: 2,
        default: 0.7,
        step: 0.01,
      },
      {
        key: 'top_p',
        name: 'Top P',
        description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        type: 'slider',
        min: 0,
        max: 1,
        default: 1,
        step: 0.01,
      },
    ],
    bots: [
      {
        id: 'chat_continuous',
        type: 'chat_continuous',
        name: 'Continuous Chat',
        settings: [],
      },
      {
        id: 'chat_single',
        type: 'chat_single',
        name: 'Single Chat',
        settings: [],
      },
      {
        id: 'image_generation',
        type: 'image_generation',
        name: 'Generate Image',
        settings: [],
      },
    ],
    handlePrompt,
    handleRapidPrompt,
  }
  return provider
}

export default providerOpenAI
