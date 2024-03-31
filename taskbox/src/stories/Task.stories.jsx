import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const LongText = {
  args: {
    task: {
      ...Default.args.task,
      title: 'Очень длинный текст, с помощью которого мы будем проверять, вмещается ли он в таске или нет. Ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы'
    },
  },
};

export const LongTextArchived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
      title: 'Очень длинный текст, с помощью которого мы будем проверять, вмещается ли он в таске или нет. Ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы'
    },
  },
};

export const MultipleTasks = () => {
  return <div>
    <Task task={{id: 2, title:'Я закрепленная задача', state: 'TASK_PINNED'}}></Task>
    <Task task={{id: 1, title:'Я обычная задача', state: 'TASK_INBOX'}}></Task>
    <Task task={{id: 3, title:'Я архивированная задача', state: 'TASK_ARCHIVED'}}></Task>
  </div>
}