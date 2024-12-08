import Question from './question.js';
import Course from './course.js';
import Alternative from './alternative.js';
import Content from './content.js';
import Trail from './trail.js';

Course.hasMany(Question, { foreignKey: 'courseId' });
Question.belongsTo(Course, { foreignKey: 'courseId' });

Question.hasMany(Alternative, { foreignKey: 'questionId' });
Alternative.belongsTo(Question, { foreignKey: 'questionId' });

Course.hasMany(Content, { foreignKey: 'courseId' });
Content.belongsTo(Course, { foreignKey: 'courseId' });

Course.belongsTo(Trail, { foreignKey: 'trailId' });
Trail.hasMany(Course, { foreignKey: 'trailId' });