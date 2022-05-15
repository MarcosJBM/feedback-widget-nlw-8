import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        comment: 'example comment',
        type: 'BUG',
        screenshot: 'data:image/png;base64,ADSODASOIMDMSAO',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        comment: 'example comment',
        type: '',
        screenshot: 'data:image/png;base64,ADSODASOIMDMSAO',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        comment: '',
        type: 'BUG',
        screenshot: 'data:image/png;base64,ADSODASOIMDMSAO',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot format', async () => {
    await expect(
      submitFeedback.execute({
        comment: 'example comment',
        type: 'BUG',
        screenshot: 'test.jpg',
      })
    ).rejects.toThrow();
  });
});
